class EndGamePictureSound{
    divPicture
    pictureEndGame
    constructor(isError)
    {   
        const deleteMain = document.querySelector('main');
        deleteMain.parentNode.removeChild(deleteMain);
        this.divPicture = document.createElement('div');
        this.divPicture.classList.add('picture-end-game');
        this.pictureEndGame = document.createElement('img');
        this.pictureEndGame.classList.add('picture-end-game');
        if(isError){
            var audio = new Audio();
            audio.preload = 'auto';
            audio.src = './assets/audio/success.mp3';
            audio.play();
            this.pictureEndGame.src = 'assets/img/failure.jpg';
        }
        else{
            var audio = new Audio();
            audio.preload = 'auto';
            audio.src = './assets/audio/failure.mp3';
            audio.play();
            this.pictureEndGame.src = 'assets/img/success.jpg';
        }
        this.divPicture.appendChild(this.pictureEndGame);
        document.body.appendChild(this.divPicture);
    }
}
export default EndGamePictureSound;