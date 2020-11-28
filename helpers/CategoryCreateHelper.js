import cardsConfig from './cardsConfig.js';
import CategoryFigureCreater from './CategoryFigureCreater.js';

class CategoryCreateHepler {
  constructor(Category) {
    this.CategoryContainer = document.createElement('div');
    this.CategoryContainer.classList.add('cards');
    this.CategoryContainer.id = 'div-container';
    this.indexCardsCategory = cardsConfig.categories.indexOf(`${Category}`);
    cardsConfig.cards[this.indexCardsCategory].forEach((element) => {
      this.CategoryContainer.appendChild(this.addNewContainer(element));
    });
    document.body.querySelector('main').appendChild(this.CategoryContainer);
  }

  addNewContainer(elementCategory) {
    return (new CategoryFigureCreater(elementCategory)).getFigure();
  }
}

export default CategoryCreateHepler;
