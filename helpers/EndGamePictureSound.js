import MainPageCreateHelper from './MainPageCreateHelper.js';

class EndGamePictureSound {
  constructor(isError) {
    this.selectorMain = document.querySelector('main');
    this.selectorMain.classList.add('off-display');
    this.divPicture = document.createElement('div');
    this.divPicture.classList.add('picture-end-game');
    this.pictureEndGame = document.createElement('img');
    this.pictureEndGame.classList.add('picture-end-game');
    if (isError) {
      this.audio = new Audio();
      this.audio.preload = 'auto';
      this.audio.src = './assets/audio/failure.mp3';
      this.audio.play();
      this.pictureEndGame.src = 'assets/img/failure.jpg';
    } else {
      this.audio = new Audio();
      this.audio.preload = 'auto';
      this.audio.src = './assets/audio/success.mp3';
      this.audio.play();
      this.pictureEndGame.src = 'assets/img/success.jpg';
    }
    this.divPicture.appendChild(this.pictureEndGame);
    document.body.appendChild(this.divPicture);
    setTimeout(() => this.jumpMainPage(), 3000);
  }

  jumpMainPage() {
    this.deleteGameComponent();
    new MainPageCreateHelper();
    document.querySelector('#mainPage').click();
  }

  deleteGameComponent() {
    document.querySelectorAll('.star').forEach((star) => {
      this.selectorMain.querySelector('div').removeChild(star);
    });
    document.body.removeChild(this.divPicture);
  }
}
export default EndGamePictureSound;
