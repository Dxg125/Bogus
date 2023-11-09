'use strict';

/*

Global JS Error Catcher -> Reports Data over Ajax to index page

ty to ->
https://stackoverflow.com/questions/6787711/javascript-backtrace
https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
https://stackoverflow.com/questions/8446861/how-to-catch-all-javascript-errors-with-window-onerror-including-dojo
https://gist.github.com/sgnl/bd760187214681cdb6dd
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
*/

/* Global JS Error handler, make sure to extend new window-objects with this function! */
window.onerror = (msg, url, lineNo, columnNo, trace) => {

 /* (get) element by id */
 let eli = (ID) => {return document.getElementById(ID);}

 /* inform user about not traceable error */
 if (msg.toLowerCase().indexOf('script error') > -1){
  customAlert('Script Error: See Browser Console for Detail');
 }

 /* create err object */
 let err = {
  Version         : eli('version').innerHTML,
  Mobile          : window.mobile,
  Tablet          : window.tablet,
  ScreenDimensions: {
   availLeft      : window.screen.availLeft,
   availTop       : window.screen.availTop,
   colorDepth     : window.screen.colorDepth,
   pixelDepth     : window.screen.pixelDepth,
   orientation    : {
    angle         : window.screen.orientation.angle,
    type          : window.screen.orientation.type,
   },
   availHeight    : window.screen.availHeight,
   availWidth     : window.screen.availWidth,
   height         : window.screen.height,
   width          : window.screen.width,
  },
  WhoAmI          : window.WhoAmI,
  Name            : eli('dropdownMenuButton').innerHTML.trim(),
  Location        : JSON.parse(JSON.stringify(window.location)),
  Page            : document.querySelectorAll('.nav-link.active')[0].getAttribute('data-page'),
  Message         : msg,
  ErrorDocument   : url,
  Line            : lineNo,
  Column          : columnNo,
  Tracert         : trace.stack.toString().replace(/\n/g, ' '),
  DateTime        : new Date().toString(),
  Lang            : eli('lang').value,
 };

 /* create request */
 var http = new XMLHttpRequest();
 http.open('POST', '', true);
 http.onreadystatechange = function() {
  if (http.readyState == 4 && http.status == 200) {
   if (http.responseText.toString() !== 'true'){
    /* error report could not be saved */
    /* todo popup for user -> this site is buggy af, take another */
   }
  }
 }

 http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
 http.send(`Action=Log&Command=JSError&Data=${(JSON.stringify(err))}`);

 /* supress */
 return 0;
}


'use strict';

/*

Global JS Error Catcher -> Reports Data over Ajax to index page

ty to ->
https://stackoverflow.com/questions/6787711/javascript-backtrace
https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
https://stackoverflow.com/questions/8446861/how-to-catch-all-javascript-errors-with-window-onerror-including-dojo
https://gist.github.com/sgnl/bd760187214681cdb6dd
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
*/

/* Global JS Error handler, make sure to extend new window-objects with this function! */
window.onerror = (msg, url, lineNo, columnNo, trace) => {

 /* (get) element by id */
 let eli = (ID) => {return document.getElementById(ID);}

 /* inform user about not traceable error */
 if (msg.toLowerCase().indexOf('script error') > -1){
  customAlert('Script Error: See Browser Console for Detail');
 }

 /* create err object */
 let err = {
  Version         : eli('version').innerHTML,
  Mobile          : window.mobile,
  Tablet          : window.tablet,
  ScreenDimensions: {
   availLeft      : window.screen.availLeft,
   availTop       : window.screen.availTop,
   colorDepth     : window.screen.colorDepth,
   pixelDepth     : window.screen.pixelDepth,
   orientation    : {
    angle         : window.screen.orientation.angle,
    type          : window.screen.orientation.type,
   },
   availHeight    : window.screen.availHeight,
   availWidth     : window.screen.availWidth,
   height         : window.screen.height,
   width          : window.screen.width,
  },
  WhoAmI          : window.WhoAmI,
  Name            : eli('dropdownMenuButton').innerHTML.trim(),
  Location        : JSON.parse(JSON.stringify(window.location)),
  Page            : document.querySelectorAll('.nav-link.active')[0].getAttribute('data-page'),
  Message         : msg,
  ErrorDocument   : url,
  Line            : lineNo,
  Column          : columnNo,
  Tracert         : trace.stack.toString().replace(/\n/g, ' '),
  DateTime        : new Date().toString(),
  Lang            : eli('lang').value,
 };

 /* create request */
 var http = new XMLHttpRequest();
 http.open('POST', '', true);
 http.onreadystatechange = function() {
  if (http.readyState == 4 && http.status == 200) {
   if (http.responseText.toString() !== 'true'){
    /* error report could not be saved */
    /* todo popup for user -> this site is buggy af, take another */
   }
  }
 }

 http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
 http.send(`Action=Log&Command=JSError&Data=${(JSON.stringify(err))}`);

 /* supress */
 return 0;
}




/* oder sneuere ned resp weniger boosted, ja emmer no boosted lulz */
window.onerror = (msg = ` - `, url = ` - `, lineNo = -1, columnNo = -1, trace = ` - `, data = false) => {
   /* create err object (literal order) */
   let err = {
    Message: msg,
    ErrorDocument: url,
    Line: lineNo,
    Column: columnNo,
    Tracert: trace ? trace.stack.toString().replace(/\n/g, ` `) : `Tracert Failed, script may be injected, rigged, or executed in VM.`,
    Data: simpleStringify(data || []),
    Mobile: window.C_GLOBAL.is_mobile,
    WhoAmI: C_GLOBAL.agent_id,
    Location: JSON.parse(JSON.stringify(window.location)),
    DateTime: new Date().toString(),
    Lang: C_GLOBAL.LANG,
    ScreenDimensions: {
     availLeft: window.screen.availLeft,
     availTop: window.screen.availTop,
     colorDepth: window.screen.colorDepth,
     pixelDepth: window.screen.pixelDepth,
     orientation: {
      angle: window.screen.orientation.angle,
      type: window.screen.orientation.type,
     },
     availHeight: window.screen.availHeight,
     availWidth: window.screen.availWidth,
     height: window.screen.height,
     width: window.screen.width,
    },
   };
   /* create request */
   let http = new XMLHttpRequest();
   http.open(`POST`, ``, true);
   http.setRequestHeader(`Content-Type`, `application/x-www-form-urlencoded`);
   http.send(`report=JS&Data=${(JSON.stringify(err))}`);
   /* only check if request has failed */
   http.onreadystatechange = () => {
    if (http.readyState === XMLHttpRequest.DONE && !(http.status === 0 || (http.status >= 200 && http.status < 400))) {
     console.error(`Error log failed`, http.responseText, err);
    }
   };
   /* try to suppress */
   return 0;
  };
