import MediaPlayer from "../MediaPlayer";

class AutoPause {
  private threshold: number;
  private pauseByScroll: boolean;
  private pauseByWindow: boolean;
  player: MediaPlayer;

  constructor() {
    this.threshold = 0.25;
    this.pauseByScroll = false;
    this.pauseByWindow = false;
  }

  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handlerIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);

    document.addEventListener('visibilitychange', this.handlerVisibilityChange);
  }

  private handlerIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];

    const isVisble = entry.intersectionRatio >= this.threshold;

    // el video de por si ya se reproduce automaticamente con el plugin de AutoPlay. si lo que
    // quieres es que cuando el usuario regrese al video luego de leer los comentario y el video
    // este pausado (no se reproduzca automaticamente) solo tienes que cambiar el condicional if

    if (!isVisble && !this.player.media.paused) {
      this.player.pause();
      this.pauseByScroll = true;
    }
    if (isVisble && this.pauseByScroll) {
      this.player.play();
      this.pauseByScroll = false;
    }
  };

  private handlerVisibilityChange = () => {
    const isVisble = document.visibilityState === 'visible';
    if (!isVisble && !this.player.media.paused) {
      this.player.pause();
      this.pauseByWindow = true;
    }
    if (isVisble && this.pauseByWindow) {
      this.player.play();
      this.pauseByWindow = false;
    }
  };
}
export default AutoPause;
