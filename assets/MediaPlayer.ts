/* eslint-disable max-len */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.inintPlugins();
    // aqui con el or estamos agregando un array vacio solo para que
    // funcione incluso si los plugins no funcionanan es un valor por defecto
  }

  initPlayer() {
    this.container = document.createElement('div');
    this.container.style.position = 'relative';
    this.media.parentNode!.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }

  // aqui inicializo los plugins uno por unno con forEach
  private inintPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }

  // apartado de funciones del reproductor
  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }

  // aqui esta las funciones de los botones
  togglePlay() {
    this.media.paused ? this.play() : this.pause();
  }

  toggleMute() {
    this.media.muted ? this.unmute() : this.mute();
  }

  volumeUp() {
    this.media.volume += 0.05;
  }

  volumeDown() {
    this.media.volume -= 0.05;
  }
}

export default MediaPlayer;
