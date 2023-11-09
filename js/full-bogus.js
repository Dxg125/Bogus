`use strict`;

const v      = window;
v.Timeout    = 10; /* 10 mins */
v.StayLogged = 0;
/* Timeout script */
v.TabActive  = 1;
v.IdleTime   = 0;

$(document).ready(e => {

 /* Resize Function (used on mobile) in order to set height properly because of the url-bar */
 $(v).resize(() => {
  /* mol abgseh vode tatsach das da futzdumm esch, well es chan es tablet aber kes handy sii, vice versa lmao aso ich cha es handy ha, wo aber ned als tablet zählt */
  top.mobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
  top.tablet = $(window).width() > 500;
  document.documentElement.style.setProperty(`--contentHeight`, `${v.innerHeight * .01}px`);
 }).trigger(`resize`);

 /* add leading zeroes to str */
 v.padNr          = (str = ``, size = 0) => (`0`.repeat(size) + str).substr(`${str}`.length, size);
 /* post request */
 v.post           = (data, fnc = ``) => $.post(``, data).always(function(e) {typeof fnc == `function` && fnc(e);});
 /* async post request */
 v.asynPost       = async (data, f) => await post(data, f);
 /* post data object */
 v.postObj        = (a, c, d, s = 1) => { return { Action: a, Command: c, Data: s ? JSON.stringify(d) : d }; }
 /* creates random ID */
 v.createRandomID = () => { return Math.random().toString(36).replace(/[^a-z]+/g, ``).substr(0, 10); }
 /* Navigation func */
 v.navigate       = (Page = ``) => post({page: Page, TOKEN: $(`template`).html()}, e => location.reload());
 /* ty to -> https://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer/20779354#20779354 */
 v.isInt          = (n) => Number(n) == n && n % 1 === 0 && n != ``;
 v.isFloat        = (n) => Number(n) == n && n % 1 !== 0;
 v.isObject       = (e) => typeof e === 'object' && e !== null;
 /* format date to db Format (ISO) */
 v.formatDate     = (date = ``) => new Date(date).toISOString().split(`T`)[0];

 /* FIXME: add loader to body */
 //$(`body`).append(`<div class="full-block-loader d-none"><svg id="page-loader"><circle cx="75" cy="75" r="20"/><circle cx="75" cy="75" r="35"/><circle cx="75" cy="75" r="50"/><circle cx="75" cy="75" r="65"/></svg></div>`);
 /* FIXME: actually use it */
 top.toggleLoader = () => { $('.full-block-loader').toggleClass('d-none'); }

 top.delay = function delay(callback, ms) {
  var timer = 0;
  return function() {
   var context = this, args = arguments;
   clearTimeout(timer);
   timer = setTimeout(function() {callback.apply(context, args);}, ms || 0);
  };
 }

 Date.prototype.formatEU = function() {
  let datetime = this.toISOString().split('T');
  let date = datetime[0].split('-');
  return `${date[2]}.${date[1]}.${date[0]}`;
 }

 Date.prototype.toDateTime = function () {
  var dt = this.toISOString().split(`T`)[0].split(`-`);
  return `${dt[2]}.${dt[1]}.${dt[0]} ${this.toTimeString().split(` `)[0]}`;
 }

 /* jQuery passive touchstart */
 jQuery.event.special.touchstart = {setup: function(_, ns, handle) {this.addEventListener(`touchstart`, handle, {passive: true});}};
 /* jQuery non-passive touchmove */
 jQuery.event.special.touchmove = {setup: function(_, ns, handle) {this.addEventListener(`touchmove`, handle, {passive: false});}};

 v.validatePost = function (t) {
  try { var d = $.parseJSON(t);} catch (e) { console.log(t); }
  return (typeof d == 'string' && d) ? note({title: d, type: note.warning}) && false : d;
 }

 /* AFK Script */
 setInterval(e => {
  /* Dont check if staylogged */
  if (!v.StayLogged) {
   /* Send 'Keep-Alive'?!? */
   v.TabActive && !v.IdleTime && post({ Action: `Session` }, e => { !validatePost(e) && location.reload(); });
   /* Reached Timeout, Logout Frontend, cuz session is ded */
   v.IdleTime++ > v.Timeout && $(`#logout`).click();
  }
 }, 6e4);
 /* Window Events reset active */
 $(v).blur(e => { v.TabActive = 0; }).focus(e => { v.TabActive = 1; }).on('mousemove keydown mousedown', e => { v.IdleTime = 0; });

 /* animate loader by setting width */
 $(`#loader`).addClass(`w-100`);

 /* check user wants automated logout */
 post(postObj(`User`, `StayLogged`), e => (v.StayLogged = parseInt(e) || 0));

}).keyup(e => {
 /* global key up for escape key */
 if ((e.which || e.keyCode) == 27 || e.key == 'Escape' || e.code == 'Escape') {
  $('.modal').modal('hide');
  $('.popover').popover('hide');
 }
});
