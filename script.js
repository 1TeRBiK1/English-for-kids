import cardsConfig from './assets/cardsConfig.js';
import MainPageCreateHelper from './helpers/MainPageCreateHelper.js';
import CategoryCreateHepler from './helpers/CategoryCreateHelper.js';
import GamePlayHelper from './helpers/GamePlayHelper.js';

window.onload = () => new MainPageCreateHelper();

const Propirties = {
  isMainPage: true,
  isPlayGame: false,
  category: 'Main Page',
  controllerGame: null,
};
const checkBoxBurger = document.querySelector('#hmt');
const displayImgAndButtonStartGame = () => {
  if (Propirties.isMainPage) {
    document.getElementById('button-game').classList.add('off-display');
  } else if (Propirties.isPlayGame) {
    document.getElementById('button-game').classList.remove('off-display');
    document.querySelectorAll('figure').forEach((figure) => {
      figure.querySelector('img').classList.add('img-active-play-game');
      figure.querySelectorAll('figcaption').forEach((figcaption) => figcaption.classList.add('off-display'));
    });
  } else {
    document.getElementById('button-game').classList.add('off-display');
    document.querySelectorAll('figure').forEach((figure) => {
      figure.querySelector('img').classList.remove('img-active-play-game');
      figure.querySelectorAll('figcaption').forEach((figcaption) => figcaption.classList.remove('off-display'));
    });
  }
};
const playGameStart = () => {
  document.querySelectorAll('a').forEach((elem) => {
    if (elem.classList.contains('active-a')) {
      Propirties.category = elem.textContent;
    }
  });
  Propirties.controllerGame = new GamePlayHelper(Propirties.category);
  Propirties.controllerGame.playCardAudio();
};
const addButtonRepeatWord = () => {
  document.getElementById('button-game').querySelector('span').textContent = '';
  document.getElementById('button-game').querySelector('span').classList.add('add-button-repeat');
  document.getElementById('button-game').classList.add('add-div-button-game');
  playGameStart();
};

const addButtonStartGame = () => {
  document.getElementById('button-game').querySelector('span').textContent = 'Start game';
  document.getElementById('button-game').querySelector('span').classList.remove('add-button-repeat');
  document.getElementById('button-game').classList.remove('add-div-button-game');
};
const switchTrainPlayStyle = () => {
  if (!Propirties.isPlayGame) {
    document.getElementById('switch').classList.add('play-style');
    document.getElementById('train').classList.add('off-display');
    document.getElementById('play').classList.remove('off-display');
    document.getElementById('hidden-menu').classList.add('play-style');
    document.querySelectorAll('figure').forEach((div) => div.classList.add('play-style-figure'));
  } else {
    document.getElementById('switch').classList.remove('play-style');
    document.getElementById('play').classList.add('off-display');
    document.getElementById('train').classList.remove('off-display');
    document.getElementById('hidden-menu').classList.remove('play-style');
    document.querySelectorAll('figure').forEach((div) => div.classList.remove('play-style-figure'));
  }
  displayImgAndButtonStartGame();
  addButtonStartGame();
};

const deleteStyleTagA = () => {
  document.querySelectorAll('a').forEach((a) => a.classList.remove('active-a'));
};

const addMainPageStylePlayGame = () => {
  document.querySelectorAll('figure').forEach((div) => div.classList.add('play-style-figure'));
};

const deleteGameComponent = () => {
  Propirties.controllerGame = null;
  document.querySelectorAll('.star').forEach((star) => {
    document.querySelector('main').querySelector('div').removeChild(star);
  });
  document.querySelectorAll('figure').forEach((figure) => {
    figure.classList.remove('blur');
  });
};
const clickEvent = (event) => {
  const isClickButtonMenu = event.target.classList.contains('btn-menu')
    || event.target.classList.contains('first')
    || event.target.classList.contains('second')
    || event.target.classList.contains('third')
    || event.target.classList.contains('hidden-menu-ticker')
    || event.target.classList.contains('hidden-menu')
    || (event.target.tagName === 'LI');
  if (isClickButtonMenu) {
    return;
  }
  const isClickButtonStartGame = event.target.classList.contains('button-game')
    || event.target.classList.contains('start-game');
  const isClickButtonRepeatWord = event.target.classList.contains('add-div-button-game')
    || event.target.classList.contains('add-button-repeat');
  if (isClickButtonStartGame && !isClickButtonRepeatWord) {
    addButtonRepeatWord();
  } else if (isClickButtonStartGame && isClickButtonRepeatWord) {
    Propirties.controllerGame.repeatCardAudio();
  }
  checkBoxBurger.checked = false;
  const isClickCardFigure = event.target.classList.contains('card')
    || event.target.classList.contains('card-name')
    || event.target.classList.contains('card-image');
  if (isClickCardFigure && Propirties.isMainPage) {
    Propirties.category = event.target.closest('figure').querySelector('span').textContent;
    const deleteContainerCard = document.getElementById('div-container');
    deleteContainerCard.parentNode.removeChild(deleteContainerCard);
    new CategoryCreateHepler(Propirties.category);
    Propirties.isMainPage = false;
    displayImgAndButtonStartGame();
    deleteStyleTagA();
    addButtonStartGame();
    document.querySelectorAll('a').forEach((a) => {
      if (a.textContent === Propirties.category) {
        a.classList.add('active-a');
      }
    });
  }
  const isClickRotateImg = event.target.classList.contains('rotate');
  if (event.target.closest('figure') && !Propirties.isPlayGame) {
    const cardWord = event.target.closest('figure').querySelector('span').textContent;
    cardsConfig.cards.forEach((elemArray) => elemArray.forEach((elemCard) => {
      if (elemCard.word === cardWord) {
        const audio = new Audio();
        audio.preload = 'auto';
        audio.src = `./assets/audio/${cardWord}.mp3`;
        audio.play();
      }
    }));
  }
  if (isClickRotateImg) {
    event.target.closest('figure').classList.add('active');
  }

  if (event.target.tagName === 'A') {
    deleteGameComponent();
    document.querySelectorAll('a').forEach((a) => a.classList.remove('active-a'));
    event.target.classList.add('active-a');
    if (event.target.href.split('#/')[1] === 'cards') {
      Propirties.isMainPage = false;
      const deleteContainerCard = document.getElementById('div-container');
      deleteContainerCard.parentNode.removeChild(deleteContainerCard);
      new CategoryCreateHepler(event.target.textContent);
      // switchTrainPlayStyle();
      displayImgAndButtonStartGame();
      addButtonStartGame();
    } else {
      Propirties.isMainPage = true;
      const deleteContainerCard = document.getElementById('div-container');
      deleteContainerCard.parentNode.removeChild(deleteContainerCard);
      new MainPageCreateHelper();
      addMainPageStylePlayGame();
      displayImgAndButtonStartGame();
      addButtonStartGame();
    }
  }
  if (event.target.classList.contains('hide-check')) {
    Propirties.isPlayGame = !Propirties.isPlayGame;
    displayImgAndButtonStartGame();
  }
  if (Propirties.isPlayGame && event.target.closest('figure')) {
    document.querySelectorAll('figure').forEach((figure) => figure.classList.remove('isClick'));
    event.target.closest('figure').classList.add('isClick');
  }
  if (Propirties.isPlayGame && event.target.classList.contains('img-active-play-game')) {
    const cardWord = event.target.closest('figure').querySelector('span').textContent;
    if (Propirties.controllerGame === null) {
      cardsConfig.cards.forEach((elemArray) => elemArray.forEach((elemCard) => {
        if (elemCard.word === cardWord) {
          const audio = new Audio();
          audio.preload = 'auto';
          audio.src = `./assets/audio/${cardWord}.mp3`;
          audio.play();
        }
      }));
    } else if (Propirties.controllerGame !== null) {
      Propirties.controllerGame.isCorrectCard(cardWord);
    }
  }
  if (!Propirties.isPlayGame) {
    deleteGameComponent();
  }
};

document.querySelector('.switch-container').addEventListener('click', switchTrainPlayStyle);
document.addEventListener('click', clickEvent);
document.onmouseover = (event) => {
  const isMouseOverNoFigure = event.target.classList.contains('cards');
  if (isMouseOverNoFigure) {
    document.querySelectorAll('figure').forEach((figure) => figure.classList.remove('active'));
  }
};
