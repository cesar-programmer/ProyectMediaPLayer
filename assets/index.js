/* eslint-disable import/extensions */
/* eslint-disable func-names */
// eslint-disable-next-line import/extensions
import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
// constructor del video a reproducirse mas la inicializacion de los plugins
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

// acciones de los botones
const buttonPlay = document.querySelector('#PlayPause');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute = document.querySelector('#MuteUnmute');
buttonMute.onclick = () => player.toggleMute();
