import cardsConfig from '../assets/cardsConfig.js';
import MainFigureCreater from './MainFigureCreater.js';

class MainPageCreateHepler {
  constructor() {
    this.selectorMain = document.body.querySelector('main');
    this.selectorMain.classList.remove('off-display');
    this.lastFiguresContainer = document.body.querySelector('.cards');
    if (this.lastFiguresContainer !== null) {
      this.selectorMain.removeChild(this.lastFiguresContainer);
    }
    this.mainPageContainer = document.createElement('div');
    this.mainPageContainer.classList.add('cards');
    this.mainPageContainer.id = 'div-container';
    cardsConfig.categories.forEach((element, indexElement) => {
      this.mainPageContainer.appendChild(this.addNewContainer(element, indexElement));
    });
    this.selectorMain.appendChild(this.mainPageContainer);
  }

  addNewContainer(nameCategory, indexArrayCategory) {
    return (new MainFigureCreater(nameCategory, indexArrayCategory)).getFigure();
  }
}

export default MainPageCreateHepler;
