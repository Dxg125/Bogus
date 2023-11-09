"use strict";

const v = window;

$(document).ready(e => {

 /* Resize Function (used on mobile) in order to set height properly because of the url-bar */
 $(v).resize(() => { document.documentElement.style.setProperty('--contentHeight', v.innerHeight * .01 + 'px'); }).trigger('resize');

 v.post = function(d, f) {$.post('', d).done(e => {typeof f == "function" && f(e);}).fail(t => {throw new Error(t);});}
 v.asynPost = async (d, f) => {await $.post('', d).done(e => {typeof f == "function" && f(e);}).fail(t => {throw new Error(t);});}
 v.postObj = function postObj(Action, Command, Data, Stringify = 1) {return {Action: Action, Command: Command, Data: Stringify ? JSON.stringify(Data) : Data};}

 v.validatePost = function validatePost(t) {
  try { var d = $.parseJSON(t); } catch (e) { console.log(t); }
  return (typeof d == 'string' && d) ? top.customAlert(d) : d;
 }

 /* Timeout script */
 v.TabActive = 1;
 v.IdleTime = 0;
 /* Set IdleTimer every Minute + 1, kick user after 10 mins */
 setInterval(e => {v.IdleTime++ > 10 && $('#logout').click();}, 6e4);
 /* Send 'Keep-Alive' interval on active tab */
 setInterval(e => {v.TabActive && !v.IdleTime && post({Action: 'Session'}, e => {!validatePost(e) && location.reload();});}, 6e4);
 /* Window Events reset active */
 $(v).blur(e => {v.TabActive = 0;}).focus(e => {v.TabActive = 1;}).on('mousemove keydown keyup click', e => {v.IdleTime = 0;});

}).keyup(e => {
 /* global key up for escape key */
 if ((e.which || e.keyCode) == 27 || e.key == 'Escape' || e.code == 'Escape'){
  $('.modal').modal('hide');
  $('.popover').popover('hide');
 }
});


Btw noob comment,

Mach eifach d'onload function async, dennig chasch jede scheiss inedranne awaite (wenns schnell und ned suber si muess)

$(async () => {
 /* Get the Report Types */
 await asynPost(postObj('TimeManagement', 'GetTypes'), e => { v.REPORT_TYPES = validatePost(e); });
…..


 If you are using jQuery, you don't have to do anything special. Handlers added via $(document).ready() don't overwrite each other, but rather execute in turn:
$(document).ready(func1)
...
$(document).ready(func2)

If you are not using jQuery, you could use addEventListener, as demonstrated by Karaxuna, plus attachEvent for IE<9.
Note that onload is not equivalent to $(document).ready() - the former waits for CSS, images... as well, while the latter waits for the DOM tree only. Modern browsers (and IE since IE9) support the DOMContentLoaded event on the document, which corresponds to the jQuery ready event, but IE<9 does not.
if(window.addEventListener){
  window.addEventListener('load', func1)
}else{
  window.attachEvent('onload', func1)
}
...
if(window.addEventListener){
  window.addEventListener('load', func2)
}else{
  window.attachEvent('onload', func2)
}

If neither option is available (for example, you are not dealing with DOM nodes), you can still do this (I am using onload as an example, but other options are available for onload):
var oldOnload1=window.onload;
window.onload=function(){
  oldOnload1 && oldOnload1();
  func1();
}
...
var oldOnload2=window.onload;
window.onload=function(){
  oldOnload2 && oldOnload2();
  func2();
}
or, to avoid polluting the global namespace (and likely encountering namespace collisions), using the import/export IIFE pattern:
window.onload=(function(oldLoad){
  return function(){
    oldLoad && oldLoad();
    func1();
  }
})(window.onload)
...
window.onload=(function(oldLoad){
  return function(){
    oldLoad && oldLoad();
    func2();
  }
})(window.onload)

From <https://stackoverflow.com/questions/15564029/adding-to-window-onload-event>



const obst = [
  {name:"Bananen", menge: 740},
  {name:"Äpfel", menge: -40},
  {name:"Birnen", menge: 20},
  {name:"Ananas", menge: 0.5},
  {name:"Pflaumen", menge: 0}
];
const sortBy = (key) => {
  return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
};
obst.sort(sortBy("menge"));

Aus <https://www.mediaevent.de/javascript/array-assoziativ.html>

/* https://stackoverflow.com/questions/2343343/how-can-i-determine-the-current-line-number-in-javascript/27074218#27074218 */
function ln() {
  var e = new Error();
  if (!e.stack) try {
    // IE requires the Error to actually be throw or else the Error's 'stack'
    // property is undefined.
    throw e;
  } catch (e) {
    if (!e.stack) {
      return 0; // IE < 10, likely
    }
  }
  var stack = e.stack.toString().split(/\r\n|\n/);
  console.log(e.stack);
  // We want our caller's frame. It's index into |stack| depends on the
  // browser and browser version, so we need to search for the second frame:
  var frameRE = /:(\d+):(?:\d+)[^\d]*$/;
  do {
    var frame = stack.shift();
  } while (!frameRE.exec(frame) && stack.length);
  return frameRE.exec(stack.shift())[1];
}





