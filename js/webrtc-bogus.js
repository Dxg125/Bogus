
RTCPeerConnection.onicecandidate = async (Event, Options = {}) => {
    Log(3, `call`, `phone.initConnection() -> RTCPeerConnection IceCandidate.`, {Event, Options});
    console.log(3, `call`, `phone.initConnection() -> RTCPeerConnection IceCandidate.`, {Event, Options});

    // Sicherstellen, dass eine Verbindung vorhanden ist
    let Connection = Options.RTCPeerConnection || Event.target || RTCPeerConnection;

    // Überprüfen, ob ein Kandidat vorhanden ist
    if (Event.candidate && Connection && Connection.addIceCandidate && Connection.remoteDescription) {
        console.log(`im ADDING MY CANDIDATE!!!`);

        // Optional: Username Fragment entfernen, falls du das testweise machst
        Event.candidate.usernameFragment = null;

        // Versuch, den ICE-Kandidaten hinzuzufügen
        try {
            const result = await Connection.addIceCandidate(Event.candidate);
            if (result) {
                console.log(`ICE candidate added successfully.`, result);
            } else {
                Log(1, `call`, `phone.initConnection() -> Failed to add Ice Candidate.`, {Connection, Event, Options});
            }
        } catch (error) {
            console.error(`Error adding ICE candidate:`, error);
            Log(1, `call`, `phone.initConnection() -> Error adding Ice Candidate.`, {Connection, Event, Options, error});
        }
    }
};



if (e.session.candidateIsMissing && Data.sdp.indexOf(`a=candidate`) > -1) {
  e.session.candidateIsMissing = 0;

  // Split und Extrahieren der Kandidaten-Informationen
  let Split = Data.sdp.split(`a=candidate`);
  let candidateLine = Split[1].split(`\n`)[0];
  console.log(`created Temp`, candidateLine);

  // Extrahiere die relevanten Informationen für RTCIceCandidate
  const candidateParts = candidateLine.split(' ');
  const candidate = {
    candidate: candidateParts[0],
    sdpMid: candidateParts[1],  // sdpMid ist der Medientyp (audio/video)
    sdpMLineIndex: parseInt(candidateParts[2], 10),  // sdpMLineIndex ist der Index des m= Abschnitts
    usernameFragment: candidateParts[3]
  };

  console.log(`new candidate`, candidate);

  // Erstelle den RTCIceCandidate mit den extrahierten Werten
  const iceCandidate = new RTCIceCandidate(candidate);
  e.session.connection.addIceCandidate(iceCandidate);
}


/* check for candidate */
if (e.session.candidateIsMissing && Data.sdp.indexOf(`a=candidate`) > -1) {
 e.session.candidateIsMissing = 0;


 // split & extract candidate information
 const splitCandidateSDP = Data.sdp.split(`a=candidate`);
 const candidateLine     = /* 'a=candidate' + */ (splitCandidateSDP[1].split(`\n`)[0]);

 console.log(splitCandidateSDP, candidateLine);
 // extract required data for creating new candidate
 const candidateParts    = candidateLine.split(' ');
 const candidate         = {
  candidate: candidateParts[0],
  sdpMid: candidateParts[1],  // sdpMid ist der Medientyp (audio/video)
  sdpMLineIndex: parseInt(candidateParts[2], 10),  // sdpMLineIndex ist der Index des m= Abschnitts
  usernameFragment: candidateParts[3]
 };

 console.log(`created`, candidateParts, candidate);
 const iceCandidate  = new RTCIceCandidate(candidate);
 console.log(`new candidate`, iceCandidate);
 //e.session.connection.addIceCandidate(iceCandidate);
}



if (RTCPeerConnection.Retry && RTCPeerConnection.iceConnectionState == `connected` && RTCPeerConnection.iceGatheringState == `complete`) {
 RTCPeerConnection.createOffer({'iceRestart': true}).then(async Offer => {
  console.log(`Offering??`, Offer);

  RTCPeerConnection.setLocalDescription(Offer);
  RTCPeerConnection.invite();

  //RTCPeerConnection.setRemoteDescription(new RTCSessionDescription(Offer));
  //RTCPeerConnection.setLocalDescription(await RTCPeerConnection.createAnswer());
  RTCPeerConnection.Retry = 0;
  //return this.Renegotiate(IDSession);
 });
}

