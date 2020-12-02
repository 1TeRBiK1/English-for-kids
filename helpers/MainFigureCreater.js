import cardsConfig from '../assets/cardsConfig.js';

class MainFigureCreater {
  constructor(nameCategory, indexArrayCategory) {
    this.figureContainer = document.createElement('figure');
    this.figureContainer.classList.add('card');
    this.figureContainer.classList.add('main-page');
    this.image = document.createElement('img');
    this.image.classList.add('card-image');
    this.image.src = `assets/img/${cardsConfig.cards[indexArrayCategory][0].word}.jpg`;

    this.figcaption = document.createElement('figcaption');
    this.figcaption.classList.add('card-text-eng');

    this.span = document.createElement('span');
    this.span.classList.add('card-name');
    this.span.innerHTML = `${nameCategory}`;

    this.figcaption.appendChild(this.span);

    this.figureContainer.appendChild(this.image);
    this.figureContainer.appendChild(this.figcaption);
  }

  getFigure() {
    return this.figureContainer;
  }
}

export default MainFigureCreater;
