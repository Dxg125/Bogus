/*########################*/
/*###### Start Edit ######*/
/* Number of Calls to generate */
let Calls        = 10;
/* Calling From (must exist on user-account) */
let CallFrom     = 'writeTheNumberOfTheToBeBlamedNeighborDINKELBEEEEEERG';
/* The Call Destination */
let Target       = `TODO GET NUMBER FROM <INSERT EVIL COMPANY> FOR SPAAAAAAM :)`;
/* the URL (must be logged in already) */
let URL          = `https://URL/#call`;
/* if video should be used -> true | false */
let isVideo      = true;
/* the time difference in MS for calling participants */
let JoinOffset   = 150;
/*###### Stop Edit ######*/
/*########################*/
/* Fixed Vars */
let Windows      = [];

const END_ALL    = () => {
 for (let y = 0; y < Windows.length; y++) {
 	$(`[name="${Windows[y]}"]`)[0]?.contentWindow?.Phone?.endAllSessions?.();
 }
};

const START_ALL  = () => {
 /* connect into call(s) */
 setTimeout(() => {
  for (let y = 0; y < Windows.length; y++) {
  	let Frame  = $(`[name="${Windows[y]}"]`)[0];
  	let Window = Frame.contentWindow;
   let Body   = $(Frame.contentDocument.body);
   ((Body, y) => {
   	Window.$(() => {
   		setTimeout(() => {
   			/* default click */
	   		Body.click();
	   		/* Select CallFrom */
	   		if (CallFrom) {
	   			Body.find(`#call-from`).val(CallFrom);
	   		}
		   	/* write number */
		   	if (Target) {
		   		Body.find(`#call-target-number`).val(Target);
		   	}
		   	/* call number */
		   	Body.find(isVideo ? `#call-make-video-call` : `#call-make-call`)?.[0]?.click();
   		}, 500);
   	});
   })(Body, y);
  }
 }, 2000 + (JoinOffset * 2));
};

/* Start */
if (URL && Calls > 0) {
 /* empty body */
 $(`body`).removeClass().addClass(`d-flex flex-wrap justify-content-center overflow-auto`).empty();
 /* create loop over all frames & end call button ! */
 $(`body`).append(`
  <div class="w-100 d-flex align-content-center">
   <button class="btn btn-danger end-all">END ALL</button>
   <button class="btn btn-success repeat-all">REPEAT ALL</button>
   <input type="text" class="form-control d-none" id="num-repeat" value="${Calls}">
  </div>
 `);
 $(`.end-all`).on(`click`, () => {END_ALL();});
 $(`.repeat-all`).on(`click`, () => {END_ALL(); START_ALL();});

 $(`body`).append(`<div class="d-flex flex-wrap justify-content-center overflow-auto" id="content"></div>`);
 let Content = $(`body`).find(`#content`);
 /* create the frames & connect to URL */
 for (let i = 0; i < Calls; i++) {
  let Name = `Frame-${i}`;
  Content.append(`<iframe src="${URL}" name="${Name}" class="h-50"></iframe>`);
  Windows.push(Name);
 }
}
