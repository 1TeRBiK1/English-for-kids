import cards from './cards.js';
import EndGamePictureSound from './EndGamePictureSound.js';

class GamePlayHelper{
    arrayCards
    countErrors
    star
    indexCategory 
    wordGame
    constructor(Category, event){
       // console.log(Category);
        this.indexCategory = cards[0].indexOf(Category)+1;
        this.arrayCards = cards[this.indexCategory];
        this.generationOrder();
        this.countErrors = 0;
        this.playingGame(event);
    }

    static errorCardSoundStar(){
        this.countErrors += 1;
        var audio = new Audio();
        audio.preload = 'auto';
        audio.src = './assets/audio/error.mp3';
        audio.play();
        this.star = document.createElement('div');
        this.star.classList.add('star-lose');
        document.querySelector('main').querySelector('div').appendChild(this.star);
    }
    static correctCardSoundStar(){
        var audio = new Audio();
        audio.preload = 'auto';
        audio.src = './assets/audio/correct.mp3';
        audio.play();
        this.star = document.createElement('div');
        this.star.classList.add('star-lose');
        document.querySelector('main').querySelector('div').appendChild(this.star);
    }
    static blurCard(Card)
    {   
        document.querySelectorAll('figure').forEach(figure=>
            {
                if(figure.querySelector('span').textContent === Card)
                {
                    figure.classList.add('blur');
                }
            })
    }
    endGame(){
        new EndGamePictureSound(this.countErrors);
    }
    generationOrder(){
       // console.log(this.arrayCards);
        this.arrayCards.sort(() => Math.random() - 0.5);
        //console.log(this.arrayCards);
    }
    playingGame(event){
            this.wordGame = this.arrayCards.shift();
            var audio = new Audio();
            audio.preload = 'auto';
            audio.src = `${this.wordGame.audioSrc}`;
            audio.play();
}   
    static uud(){
        if(event.target.closest('figure'))
        {
            document.querySelectorAll('figure').forEach(figure=>{
                if(figure.classList.contains('isClick')){
                    const text=event.target.closest('figure').querySelector('span').textContent;
                    switch(text)
                    {
                        case this.wordGame:
                            GamePlayHelper.correctCardSoundStar();
                            GamePlayHelper.blurCard(element);
                            event.target.closest('figure').querySelector('span').textContent = 'accept';
                            break;
                        case '':
                            audio.play();
                        default:
                            GamePlayHelper.errorCardSoundStar();
                            break;
                    }
                }
            }
                );
        }
    }
}
export default GamePlayHelper;