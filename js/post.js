v.page = './inc/bananahandler.php';

var err = function(clue){alert(clue);}//doto func log to php, if fail write to file local??? no doesnt make any sense

var post = function (a, b, d, f){
$.post(v.page, {Aktion: a, Befehl: b, Data: d})
.done((e) => (f))
.fail((this) => err(this))
.always(() => cleanup());
}


function post(target, data, exeOnCompletion, exeOnFailure){
 $.post(target, data).done((e) => (exeOnCompletion)).fail((e) => (exeOnFailure));
}


function post(target, data, exeOnCompletion, exeOnFailure){
 $.post(target, data).done((e) => (exeOnCompletion || ((e) => console.log(e)))).fail((e) => (exeOnFailure || globalErrFnc || ((e) => console.error(e))));
}

Beispiel:
post('urltotarget.php', {Aktion: 5, Data: 3}, fillInTheVals, wereGonnaDie);
//Wichtig Namen dürfen sich nicht unterscheiden, JS und das verdammti Scope lul
//die lezte beide params send nedmau nötig
//für data chönntmer, wenn parametisiert wie im TSI oder TIM  en zuesatz fnc bruche aber s'git schlimmeri redundanze als das
post('sumfakeurl.xyz', dataObj("Schoggihas", Bananegras, Data), REEEEEE)


V2:
window.globalDefFnc = ((e) => console.log(e));
window.globalErrFnc = ((e) => console.warn(e));
function post(target, data, exeOnCompletion, exeOnFailure){
 $.post(target, data).done((e) => (exeOnCompletion || globalDefFnc)).fail((e) => (exeOnFailure || globalErrFnc));
}

Kürzer geihts nöme: window.globalDefFnc=a=>console.log(a),window.globalErrFnc=a=>console.warn(a);function post(a,b,c,d){$.post(a,b).done(()=>c||globalDefFnc).fail(()=>d||globalErrFnc)}
