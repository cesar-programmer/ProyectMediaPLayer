/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
// este es el auto play para que cuando abra la ventana empieze a correr el video
// pero para que funcione tiene que estar muteado el video si no no funciona
function AutoPlay() {}
AutoPlay.prototype.run = function (player) {
  if (!player.muted) {
    player.muted = true;
  }
  player.play();
};
export default AutoPlay;
