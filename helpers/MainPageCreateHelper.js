import cards from './cards.js';
import MainFigureCreater from './MainFigureCreater.js';

class MainPageCreateHepler {
    mainPageContainer
    constructor(){
        this.selectorMain = document.body.querySelector('main');
        this.selectorMain.classList.remove('off-display');
        this.lastFiguresContainer = document.body.querySelector('.cards');
        if(this.lastFiguresContainer !== null){ 
            this.selectorMain.removeChild(this.lastFiguresContainer);
        }
        this.mainPageContainer = document.createElement('div');
        this.mainPageContainer.classList.add('cards');
        this.mainPageContainer.id = 'div-container';
        cards[0].forEach((element,indexElement) => {
            const indexArrayCategory = indexElement+1; 
            this.mainPageContainer.appendChild(this.addNewContainer(element,indexArrayCategory));
        });
        this.selectorMain.appendChild(this.mainPageContainer);
    }


    addNewContainer(nameCategory,indexArrayCategory){
        return (new MainFigureCreater(nameCategory,indexArrayCategory)).getFigure();
    }

}

export default MainPageCreateHepler;