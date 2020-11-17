import cards from './cards.js';

class CategoryFigureCreater{

    figureContainer
    divFlipper
    divFront
    divBack
    imageFront
    imageBack
    figcaptionFront
    figcaptionBack
    spanFront
    spanBack
    spanRotateFront
    spanRotateBack
    constructor(elementCategory){
        this.figureContainer = document.createElement('figure');
        this.figureContainer.classList.add('card');

        this.divFlipper = document.createElement('div');
        this.divFlipper.classList.add('flipper');

        this.divFront = document.createElement('div');
        this.divFront.classList.add('front');

        this.divBack = document.createElement('div');
        this.divBack.classList.add('back');

        this.imageFront = document.createElement('img');
        this.imageFront.classList.add('card-image');
        this.imageFront.src = `assets/img/${elementCategory.word}.jpg`;
        
        this.imageBack = document.createElement('img');
        this.imageBack.classList.add('card-image');
        this.imageBack.src = `assets/img/${elementCategory.word}.jpg`;
        
        this.figcaptionFront = document.createElement('figcaption');
        this.figcaptionFront.classList.add('card-text-eng');

        this.figcaptionBack = document.createElement('figcaption');
        this.figcaptionBack.classList.add('card-text-ru');

        this.spanFront = document.createElement('span');
        this.spanFront.classList.add('card-name');
        this.spanFront.innerHTML=`${elementCategory.word}`;

        this.spanBack = document.createElement('span');
        this.spanBack.classList.add('card-name');
        this.spanBack.innerHTML=`${elementCategory.translation}`;

        this.spanRotateFront = document.createElement('span');
        this.spanRotateFront.classList.add('rotate');

        this.spanRotateBack = document.createElement('span');
        this.spanRotateBack.classList.add('rotate');

        this.figcaptionFront.appendChild(this.spanFront);
        this.figcaptionFront.appendChild(this.spanRotateFront);

        this.figcaptionBack.appendChild(this.spanBack);
        this.figcaptionBack.appendChild(this.spanRotateBack);

        this.divFront.appendChild(this.imageFront);
        this.divFront.appendChild(this.figcaptionFront);
        
        this.divBack.appendChild(this.imageBack);
        this.divBack.appendChild(this.figcaptionBack);

        this.divFlipper.appendChild(this.divFront);
        this.divFlipper.appendChild(this.divBack);

        this.figureContainer.appendChild(this.divFlipper);


    }
    getFigure(){
        return this.figureContainer;
    }
}


export default CategoryFigureCreater;