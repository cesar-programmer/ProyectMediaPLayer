/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable func-names */
// eslint-disable-next-line import/extensions
import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
// constructor del video a reproducirse mas la inicializacion de los plugins
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });

// acciones de los botones
const buttonPlay = document.querySelector('#PlayPause');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute = document.querySelector('#MuteUnmute');
buttonMute.onclick = () => player.toggleMute();

const buttonVolumeUp = document.querySelector('#UpVolume');
buttonVolumeUp.onclick = () => player.volumeUp();

const buttonVolumeDown = document.querySelector('#DownVolume');
buttonVolumeDown.onclick = () => player.volumeDown();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch((error) => {
    console.log(error);
  });
}
