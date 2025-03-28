

let IDSession = Object.keys(Phone.sessions)[0];
let Target    = `rb2`;

let requestSucceeded = Data => { console.warn(`call`, `phone.transfer() requestSucceeded`, Data);};
let requestFailed    = Data => { console.warn(`call`, `phone.transfer() requestFailed`, Data);};
let failed           = Data => { console.warn(`call`, `phone.transfer() failed`, Data); };
let accepted         = Data => {
 console.warn(`call`, `phone.transfer() accepted`, Data);
 CSmallBox(ll([`call`, `call_start_transfer_to_tooltip`]), ll([`call`, `call_end_transfer_to_tooltip`]), `bg-success`, ``, 8000);
 /* close session after small timeout (transfer is done -> say bye bye) */
 setTimeout(() => {Phone.completeSession(IDSession, {Sound: 0, Notification: 0});}, 50);
};
let trying           = Data => {console.warn(`call`, `phone.transfer() trying`, Data);};
let progress         = Data => {console.warn(`call`, `phone.transfer() progress`, Data);};
let eventHandlers    = {requestSucceeded, requestFailed, failed, accepted, trying, progress};

//await Phone.toggleHold(IDSession, 0);
let replaces = await Phone.Call(`SIP`, Target, {IDSession, TransferCall: 1, Audio: 1});

setTimeout(() => {
 Phone.sessions[IDSession].sub_sessions[0].refer(Target, {replaces, eventHandlers});
}, 3000);

