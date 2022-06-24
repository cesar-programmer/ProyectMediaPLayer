/* eslint-disable no-useless-constructor */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
// este es el auto play para que cuando abra la ventana empieze a correr el video
// pero para que funcione tiene que estar muteado el video si no no funciona
import MediaPlayer from '../MediaPlayer';
class AutoPlay {
  constructor() {}

  run(player: MediaPlayer) {
    if (!player.media.muted) {
      player.media.muted = true;
    }
    player.play();
  }
}
export default AutoPlay;
