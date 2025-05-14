/* getStats */

RTCPeerConnection

.getStats(null).then(stats => {
  stats.forEach(report => {
    console.log('Berichtstyp:', report.type);
    console.log('Berichts-ID:', report.id);
    console.log('Zeitstempel:', report.timestamp);
    console.log('Werte:', report); // Gibt alle Eigenschaften des Berichts aus

    // Zugriff auf spezifische Werte basierend auf dem Berichtstyp
    if (report.type === 'inbound-rtp') {
      console.log('  Eingehende RTP-Pakete verloren:', report.packetsLost);
      console.log('  Eingehende RTP-Bytes empfangen:', report.bytesReceived);
      // ... weitere Metriken für eingehenden RTP-Traffic
    } else if (report.type === 'outbound-rtp') {
      console.log('  Ausgehende RTP-Pakete gesendet:', report.packetsSent);
      console.log('  Ausgehende RTP-Bytes gesendet:', report.bytesSent);
      // ... weitere Metriken für ausgehenden RTP-Traffic
    } else if (report.type === 'candidate-pair' && report.state === 'succeeded') {
      console.log('  Aktive ICE-Kandidatenpaar-ID:', report.id);
      console.log('  Lokale Kandidaten-ID:', report.localCandidateId);
      console.log('  Remote Kandidaten-ID:', report.remoteCandidateId);
      console.log('  Round Trip Time (RTT):', report.roundTripTime);
      // ... Informationen zur aktiven ICE-Verbindung
    }
    // ... weitere Berichtstypen wie 'remote-inbound-rtp', 'remote-outbound-rtp', 'transport', etc.
  });
}).catch(error => {
  console.error('Fehler beim Abrufen der Statistiken:', error);
});