`use strict`;

let SortNr = 0;
let toJSON = (Node, Key = ``, Flags = {}, isRoot = 0) => {

  /* create tmp obj for later reflection */
  let Temp   = isRoot ? {} : {SortNr: SortNr++};

  /* add the tagName of the Root as non enumerable */
  if (isRoot) {
    Object.defineProperty(Temp, `_tagName`, {enumerable: false, value: Node.nodeName});
  }

  /* loop over the attributes */
  if (Node.attributes && Node.attributes.length) {
    for (let i = 0; i < Node.attributes._nodes.length; i++) {

      /* get name / value */
      let Value = Node.attributes._nodes[i].value.toString();
      let Name  = Node.attributes._nodes[i].nodeName;

      /* check if value should be skipped -> {Attr: ValueXY} == current -> skip it */
      if (Flags.Disallow && Flags.Disallow.Attr && Flags.Disallow.Attr[Name] == Value) {
        continue;
      }

      /* try and format float & integers (attention +, - or 0 at first pos is legit in js for a number, no matter what follows) */
      /* tl;dr parseInt('+41') == 41 is true... that's why, that counts for 0, + or - (but if its equal to zero convert it anyways) */
      if ([`+`, `0`, `-`].indexOf(Value[0]) == -1 || Value == 0) {
        let Float = parseFloat(Value);
        let Int   = parseInt(Value);
        /* check for float */
        if (Float == Value) {
          Value = Float;
        }
        /* check for integers */
        else if (Int == Value) {
          Value = Int;
        }
      }

      /* set the value into temp  (on head -> set it as non enumerable!)*/
      if (isRoot) {
        Object.defineProperty(Temp, Name, {enumerable: false, value: Value});
      } else {
        Temp[Name] = Value;
      }
    }
  }

  if (Node.childNodes && Node.childNodes.length) {
    for (let i = 0; i < Node.childNodes._nodes.length; i++) {

      /* convert into Object */
      let child    = Node.childNodes._nodes[i];
      let childObj = toJSON(child, Key, Flags);

      /* insert data of "childObj" */
      /* if is assoc or numerical */
      if (childObj[Key]) {
        if (Temp[child.nodeName] == undefined) {
          Temp[child.nodeName] = {};
        }
        Temp[child.nodeName][childObj[Key]] = childObj;
      } else {

        if (Temp[child.nodeName] == undefined) {
          Temp[child.nodeName] = [];
        }
        Temp[child.nodeName].push(childObj);
      }

    }
  }

  return Temp;
};

onmessage = function (Event) {

  /* reset */
  SortNr     = 0;
  /* get from event */
  let Key    = Event.data.Key || ``;
  let Flags  = Event.data.Flags || {};
  let Result = {};

  /* convert string "xml" to JS Object */
  if (Event.data.MSG) {

    let XML        = Event.data.MSG;

    /* tag vars */
    /* the current tag, and if its a non tag after the first found space */
    let tag        = '';
    let firstSpace = false;

    /* attr -> data vars */
    /* after finding the tag -> if current is attribute and the data according onto it */
    let isAttr     = true;
    let currData   = {};
    let currAttr   = '';
    let currValue  = '';
    let skipParse  = [`+`, `0`, `-`];

    /* array vars */
    let ArrLevel   = [];
    let currLevel  = [];

    /* leave for debug */
    let current    = '';

    for (let i = 0; i < XML.length; i++) {
      current += XML[i];
      /* ignore opening tag */
      if (XML[i] != '<') {
        /* get tagName and attributes for every string char wait for closing tag */
        if (XML[i] != '>') {
          /* wait for first space -> set tag name */
          if (!firstSpace) {
            /* check again -> do not set space! */
            if (!(firstSpace = (XML[i] == ' '))) {
              tag += XML[i];
            }
          }
          /* got the tag name -> get the key(s) = value(s) */
          else {
            /* if current is space -> its split up or the next char is > or the second next is > */
            if (XML[i] == '"' || XML[i + 1] == '>' || XML[i + 2] == '>') {
              /* set (non empty) attribute = data, reset vars and skip empty space */
              if (currAttr) {
                /* try and format float & integers (attention +, - or 0 at first pos is legit in js for a number, no matter what follows) */
                /* tl;dr parseInt('+41') == 41 is true... that's why, that counts for 0, + or - (but if its equal to zero convert it anyways) */
                if (skipParse.indexOf(currValue[0]) == -1 || currValue == 0) {
                  let Float = parseFloat(currValue);
                  let Int   = parseInt(currValue);
                  /* check for float */
                  if (Float == currValue) {
                    currValue = Float;
                  }
                  /* check for integers */
                  else if (Int == currValue) {
                    currValue = Int;
                  }
                }
                /* set the data */
                currData[currAttr] = currValue;
              }
              /* reset temp vars */
              currAttr  = '';
              currValue = '';
              isAttr    = true;
              continue;
            } else if (XML[i] == '=') {
              /* it's a value now */
              /* skip the next " -> or we cannot safely listen for " in above if */
              i += 1;
              isAttr = false;
              continue;
            }
            /* set attribute or value */
            if (isAttr) {
              if (XML[i] != ' ') {
                currAttr  += XML[i];
              }
            } else if (XML[i] != '"') {
              currValue += XML[i];
            }
          }
        } else {

          /* self closing tag */
          if (XML[i - 1] == '/') {
            /* if it's a sibling object */
            if (currLevel.length == undefined) {
              if (currLevel[tag] == undefined) {
                currLevel[tag] = [currData];
              } else {
                currLevel[tag].push(currData);
              }
            } else {
              currLevel.push(currData);
            }
          }
          /* normal closing tag */
          else if (tag[0] == '/') {
            /* reset the current level */
            ArrLevel.pop();
            currLevel = Result;
            for (let y in ArrLevel) {
              currLevel = currLevel[ArrLevel[y]];
            }
          }
          /* opening tag */
          else {
            /* special for the first tag (assign hidden props!) */
            if (!ArrLevel.length) {
              Result[tag] = {_properties: currData};
              currLevel   = Result[tag];
              ArrLevel.push(tag);
            } else {
              /* set the correct index -> either key for object or len -1 for array */
              ArrLevel.push(currLevel.length == undefined ? tag : (currLevel.length - 1));
              /* reset the current level */
              currLevel = Result;
              /* set level again -> check for possible missing child */
              for (let y in ArrLevel) {
                if (!currLevel[ArrLevel[y]]) {
                  currLevel[ArrLevel[y]] = {};
                }
                currLevel = currLevel[ArrLevel[y]];
              }

            }
          }

          /* reset vars */
          current    = '';
          tag        = '';
          firstSpace = false;
          isAttr     = true;
          currValue  = '';
          currAttr   = '';
          currData   = {};
        }
      }

    }


    /* we only want the data and the non enumerable, tl;dr skip top layer (but keep non enumerable of it) */
    let tmpKeys = Object.keys(Result);
    if (tmpKeys.length == 1) {
      /* get data */
      let tmp = Result[tmpKeys[0]];
      /* remove parent key */
      delete Result[tmpKeys[0]];
      /* assign data */
      Object.assign(Result, tmp);
    }
  }

  /* HG-ONLY: make sure Conf is array */
  if (Flags.SubConference) {
    for (i in Result) {
      /* convert into array */
      Result[i].Conf = Result[i].Conf instanceof Array ? Result[i].Conf : (Result[i].Conf ? [Result[i].Conf] : []);
      /* reindex for ConfSplitNr */
      let ConfCopy = {};
      for (j in Result[i].Conf) {
        ConfCopy[Result[i].Conf[j].ConfSplitNr] = Result[i].Conf[j];
      }
      Result[i].Conf = ConfCopy;
    }
  }

  /* TODO add missing lang!! (by flag would be the most easiest) */
  /* AGENT-ONLY: Create & set default SetContactProfile Directive (used for Agents) required for prepending the default contact profile */
  if (Flags.SetContactProfile) {
    for (i in Result) {
      if (!Result[i].ContactProfile) {
        Result[i].ContactProfile = [];
      }
      Result[i].ContactProfile.unshift({Name: `Kein Aktives Profil`, ContactOrder: ``, TSLTAutoBegin: ``, TSLTAutoEnd: ``});
    }
  }

  /* Agent Only -> Combine SoftSkill Table */
  if (Flags.GetSoftSkill) {
    for (i in Result) {
      Result[i].TableSoftSkill = ((Result[i].TableSoftSkill || 0)[0] || 0).SoftSkill || [];
    }
  }

  /* make sure, that all entries in the first dimension / level of XML Copy are typeof Array */
  if (Flags.FirstLevelArray) {
    for (i in Result) {
      Result[i] = Result[i] instanceof Array ? Result[i] : [Result[i]];
    }
  }

  /* TODO THIS WILL NEVER EVER WORK! FROM HERE NOT _> TM_CON STUFF!!! */
  /* ALZT Custom Triggers */
  if (Flags.ALZT) {
    for (i in Result) {
      if (Result[i].MediaRoutingDomainID == 0 && Result[i].ConfRefIDTM != 0) {
        //this.TriggerEvent(`UpdateTableALZT_HG`, {AL: Result[i], StateText: Result[i].StateText});
      }
    }
  }

  /* we need to explicit (re-)set the non enumerable, since they get stripped... */
  /* ty to ->  @Josh Klodnicki - https://stackoverflow.com/questions/8024149/is-it-possible-to-get-the-non-enumerable-inherited-property-names-of-an-object */
  let NonEnumerable     = Object.getOwnPropertyNames(Result).filter(e => !Result.propertyIsEnumerable(e));
  Result[`_properties`] = {};

  for (i in NonEnumerable) {
    Result[`_properties`][NonEnumerable[i]] = Result[NonEnumerable[i]];
  }

  /* set the global variables as string into non enumerable */
  if (Event.data.Set) {
    Result[`_properties`][`_toSet`] = Event.data.Set;
  }

  /* return the value */
  postMessage(Result);
};
