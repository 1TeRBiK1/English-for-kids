import cards from './cards.js';
import MainFigureCreater from './MainFigureCreater.js';

class MainPageCreateHepler {
    mainPageContainer
    constructor(){
        this.mainPageContainer = document.createElement('div');
        this.mainPageContainer.classList.add('cards');
        this.mainPageContainer.id = 'div-container';
        cards[0].forEach((element,indexElement) => {
            const indexArrayCategory = indexElement+1; 
           this.mainPageContainer.appendChild(this.addNewContainer(element,indexArrayCategory));
        });
        document.body.querySelector('main').appendChild(this.mainPageContainer);
    }


    addNewContainer(nameCategory,indexArrayCategory){
        return (new MainFigureCreater(nameCategory,indexArrayCategory)).getFigure();
    }

}

export default MainPageCreateHepler;