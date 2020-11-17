import cards from './cards.js';
import CategoryFigureCreater from './CategoryFigureCreater.js';

class CategoryCreateHepler {
    CategoryContainer
    indexCardsCategory
    constructor(Category){
        this.CategoryContainer = document.createElement('div');
        this.CategoryContainer.classList.add('cards');
        this.CategoryContainer.id = 'div-container';
        this.indexCardsCategory = cards[0].indexOf(`${Category}`)+1;
        cards[this.indexCardsCategory].forEach((element) => {
           this.CategoryContainer.appendChild(this.addNewContainer(element));
        });
        document.body.querySelector('main').appendChild(this.CategoryContainer);
    }


    addNewContainer(elementCategory){
        return (new CategoryFigureCreater(elementCategory)).getFigure();
    }

}

export default CategoryCreateHepler;