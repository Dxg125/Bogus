

<audio>
let audio = audio;
audio.volume = 0.5 -> is getting ignored...

this can change the audio volume on ios (controlled by js)

// url to whatever audio file
var audio = new Audio(window.location.origin + '/' + window.C_GLOBAL.RING_FILE);
audio.loop = true;

var ctx = new AudioContext();
var src = ctx.createMediaElementSource(audio);
var gain = ctx.createGain();
gain.gain.value = 0.1;
src.connect(gain).connect(ctx.destination);

document.body.addEventListener('click', async () => {
  await ctx.resume();
  audio.play();
});


/**/
and for audioSource this will be workjing

function playStreamDirectly(stream, volume = 0.5) {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const source = ctx.createMediaStreamSource(stream);
  const gain = ctx.createGain();
  gain.gain.value = volume;

  source.connect(gain).connect(ctx.destination);

  // Required on iOS: must be resumed via user interaction
  document.body.addEventListener('click', async () => {
    try {
      await ctx.resume();
      console.log('Playback resumed via direct MediaStream');
    } catch (e) {
      console.error('Resume failed', e);
    }
  });

  return {ctx, gain};
}

const stream   = Phone.sessions[Object.keys(Phone.sessions)[0]].LocalAudio.srcObject;
const playback = playStreamDirectly(stream, 0.1);

// später Lautstärke ändern:
playback.gain.gain.value = 0.25;