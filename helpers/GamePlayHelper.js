import cardsConfig from '../assets/cardsConfig.js';
import EndGamePictureSound from './EndGamePictureSound.js';

export default class GamePlay {
  constructor(Category) {
    this.indexCategory = cardsConfig.categories.indexOf(Category);
    this.arrayCards = cardsConfig.cards[this.indexCategory].slice();
    this.countErrors = 0;
    this.randomSortCards();
    this.nextWordGame();
  }

  nextWordGame() {
    this.wordGame = this.arrayCards.shift();
  }

  randomSortCards() {
    this.arrayCards.sort(() => Math.random() - 0.5);
  }

  repeatCardAudio() {
    this.audio.src = `${this.wordGame.audioSrc}`;
    this.audio.play();
  }

  playCardAudio() {
    this.audio = new Audio();
    this.audio.preload = 'auto';
    this.audio.src = `${this.wordGame.audioSrc}`;
    setTimeout(() => this.audio.play(), 1000);
  }

  playCorrectSound() {
    this.audio = new Audio();
    this.audio.preload = 'auto';
    this.audio.src = './assets/audio/correct.mp3';
    this.audio.play();
  }

  playErrorSound() {
    this.audio = new Audio();
    this.audio.preload = 'auto';
    this.audio.src = './assets/audio/error.mp3';
    this.audio.play();
  }

  isEndGame() {
    if (this.arrayCards.length == 0) {
      new EndGamePictureSound(this.countErrors);
      return;
    }

    this.nextWordGame();
    this.playCardAudio();
  }

  addCorrectStar() {
    this.star = document.createElement('img');
    this.star.src = './assets/img/star-win.svg';
    this.star.classList.add('star');
    document.querySelector('main').querySelector('div').appendChild(this.star);
  }

  addErrorStar() {
    this.star = document.createElement('img');
    this.star.src = './assets/img/star.svg';
    this.star.classList.add('star');
    document.querySelector('main').querySelector('div').appendChild(this.star);
  }

  blurCard(nameCard) {
    document.querySelectorAll('figure').forEach((figure) => {
      if (figure.querySelector('span').textContent === nameCard) {
        figure.classList.add('blur');
      }
    });
  }

  isCorrectCard(nameCard) {
    if (this.wordGame.word === nameCard) {
      this.playCorrectSound();
      this.addCorrectStar();
      this.blurCard(nameCard);
      this.isEndGame();
    } else {
      this.playErrorSound();
      this.addErrorStar();
      this.countErrors += 1;
      setTimeout(() => this.repeatCardAudio(), 1000);
    }
  }
}
