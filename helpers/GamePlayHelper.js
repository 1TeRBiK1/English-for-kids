import cards from './cards.js';
import EndGamePictureSound from './EndGamePictureSound.js';

export default class GamePlay{
    constructor(Category){
        this.indexCategory = cards[0].indexOf(Category)+1;
        this.arrayCards = cards[this.indexCategory];
        this.countErrors = 0;
        this.randomSortCards();
        this.nextWordGame();
    }
    nextWordGame(){
        this.wordGame = this.arrayCards.shift();
    }
    randomSortCards(){
        this.arrayCards.sort(() => Math.random() - 0.5);
    }
    playCardAudio(){
        console.log('ans' ,this.wordGame, this.arrayCards);
        var audio = new Audio();
        audio.preload = 'auto';
        audio.src = `${this.wordGame.audioSrc}`;
        setTimeout(() => audio.play(), 1000);
    }
    playCorrectSound(){
        var audio = new Audio();
        audio.preload = 'auto';
        audio.src = './assets/audio/correct.mp3';
        audio.play();
    }
    playErrorSound(){
        var audio = new Audio();
        audio.preload = 'auto';
        audio.src = './assets/audio/error.mp3';
        audio.play();
    }
    isEndGame(){
        if(this.arrayCards.length == 0){
            new EndGamePictureSound(this.countErrors);
        }
        else{
            this.nextWordGame();
            this.playCardAudio();
        }
    }
    addCorrectStar(){
        this.star = document.createElement('div');
        this.star.classList.add('star-correct');
        document.querySelector('main').querySelector('div').appendChild(this.star);
    }
    addErrorStar(){
        this.star = document.createElement('div');
        this.star.classList.add('star-lose');
        document.querySelector('main').querySelector('div').appendChild(this.star);
    }
    blurCard(nameCard){
        document.querySelectorAll('figure').forEach(figure=>{
                if(figure.querySelector('span').textContent == nameCard)
                {
                    figure.classList.add('blur');
                }
            })
    }
    isCorrectCard(nameCard){
        console.log('isC');
        if(this.wordGame.word === nameCard){
            this.playCorrectSound();
            this.addCorrectStar();
            this.blurCard(nameCard);
            this.isEndGame();
        }
        else{
            this.playErrorSound();
            this.addErrorStar();
            this.countErrors += 1;
        }
    }

}