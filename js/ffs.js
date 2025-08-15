     // honestly, like why cant safari just be normal
     // safari: *screams in corner*
     if (((window.TM_CONFIG || 0).AgentID || '').replace(/rb\d/, '') == '') {
      // SDP in Zeilen aufteilen (remove "")
      let lines     = Data.sdp.split('\r\n').filter(Line => Line);
      // Audio- und Video-Streams finden
      let audioLine = lines.findIndex(line => line.includes('m=audio'));
      let videoLine = lines.findIndex(line => line.includes('m=video'));
      // Audio an die erste Stelle verschieben
      if (audioLine > -1 && videoLine > -1 && videoLine < audioLine) {
       let newLines = [];
       /* prefixes .. */
       for (let Index = 0; Index < Math.min(audioLine, videoLine); Index++) {
        newLines.push(lines[Index]);
       }
       /* push Audio first */
       for (let Index = audioLine; Index < lines.length; Index++) {
        newLines.push(lines[Index]);
       }
       /* push Video */
       for (let Index = videoLine; Index < audioLine; Index++) {
        newLines.push(lines[Index]);
       }
       // SDP wieder zusammenfügen
       //console.log(Data.sdp);
       //console.log(newLines.join('\r\n'));
       //console.log('-----------------------------------------');
       //Data.sdp = newLines.join('\r\n');
      } else {
       console.log('All god lol');
      }
     }

     btw this cant work straight like this.... HAHAHA