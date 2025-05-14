/*########################*/
/*###### Start Edit ######*/
/* Number of Participants to generate */
let Participants = 20;
/* the meeting URL */
let URL          = `?meet=`;
/* if video should be used -> true | false */
let isVideo      = true;
/* if a chat-message should be sent on joining into the conference -> true | false */
let SendMessage  = true;
/* the time difference in MS for joining participants */
let JoinOffset   = 2000;
/*###### Stop Edit ######*/
/*########################*/

/* Fixed Vars */
let WinWidth     = window.outerWidth;
let WinHeight    = window.outerWidth;
let Windows      = [];
/* Start */
if (URL && Participants > 0) {
 /* empty body */
 $(`html`).addClass(`bg-white`);
 $(`body`).addClass(`d-flex flex-wrap`).empty();
 /* create the frames & connect to URL */
 let i = 0;
 for (i; i < Participants; i++) {
  let Name = `Frame-${i}`;
  $(`body`).prepend(`<iframe src="${URL}" name="${Name}" class="w-50 h-100"></iframe>`);
  Windows.push(Name);
 }
 /* connect into conference */
 setTimeout(() => {
  for (let y = 0; y < Windows.length; y++) {
   let Body = $($(`[name="${Windows[y]}"]`)[0].contentDocument.body);
   ((Body, y) => {
    Body.find(`#Pre-Join-Conference`).trigger(`click`);
    Body.find(`#Conference-Preferred-Name`).val(`${Windows[y]}`);
    setTimeout(() => {
     Body.find(`#phone-media-settings-videoinput`).val(Body.find(`#phone-media-settings-videoinput`).find(`option[value${isVideo ? `!` : ``}=""]:first`).val());
     Body.find(`#phone-media-settings-videoinput`).trigger(`change`).next().trigger(`change`);
     setTimeout(() => {
      Body.find(`#Join-Conference`).trigger(`click`);
       if (SendMessage) {
       setTimeout(() => {
        Body.find(`#bc_widget_chat_message`).val(`Test-Message from ${Windows[y]}`);
        Body.find(`#bc_widget_chat_message_send`).trigger(`click`);
       }, JoinOffset * 2);
      }
     }, JoinOffset + (y * JoinOffset));
    }, JoinOffset);
   })(Body, y);
  }
 }, JoinOffset * 2);
}
