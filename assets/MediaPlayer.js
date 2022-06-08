/* eslint-disable max-len */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
  this.inintPlugins();
  // aqui con el or estamos agregando un array vacio solo para que
  // funcione incluso si los plugins no funcionanan es un valor por defecto
}

// aqui inicializo los plugins uno por unno con forEach
MediaPlayer.prototype.inintPlugins = function () {
  // con este obejto me aseguro que los plogins solo tengan acceso a las funcionalidades que yo quiero que tengan y no a todo el media player
  // aqui como solo quiero pasarle a autoplay el play y el pause en el plugin run le paso el objeto que cree
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted() {
      return this.media.muted;
    },

    set muted(value) {
      this.media.muted = value;
    },
  };

  this.plugins.forEach((plugin) => {
    plugin.run(player);
  });
};

// apartado de funciones del reproductor
MediaPlayer.prototype.play = function () {
  this.media.play();
};
MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};

MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};

// aqui esta las funciones de los botones
MediaPlayer.prototype.togglePlay = function () {
  this.media.paused ? this.play() : this.pause();
};

MediaPlayer.prototype.toggleMute = function () {
  this.media.muted ? this.unmute() : this.mute();
};

MediaPlayer.prototype.volumeUp = function () {
  this.media.volume += 0.05;
};

MediaPlayer.prototype.volumeDown = function () {
  this.media.volume -= 0.05;
};

export default MediaPlayer;
