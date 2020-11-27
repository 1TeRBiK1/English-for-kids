import cards from './helpers/cards.js';
import MainPageCreateHelper from './helpers/MainPageCreateHelper.js';
import CategoryCreateHepler from './helpers/CategoryCreateHelper.js';
import GamePlayHelper from './helpers/GamePlayHelper.js';
import EndGamePictureSound from './helpers/EndGamePictureSound.js';

window.onload = () => new MainPageCreateHelper() ;


let isMainPage = true;
let isPlayGame = false;
let category;
let Game;
const checkboxBurger = document.querySelector('#hmt');

document.addEventListener('click', clickEvent);
function clickEvent(event) {
  const isClickOnButton = event.target.classList.contains('btn-menu')
    || event.target.classList.contains('first')
    || event.target.classList.contains('second')
    || event.target.classList.contains('third')
    || event.target.classList.contains('hidden-menu-ticker')
    || event.target.classList.contains('hidden-menu')
    || (event.target.tagName === 'LI');
  if (isClickOnButton) {
    return;
  }
  const isClickButtonPlay = event.target.classList.contains('button-game')
    || event.target.classList.contains('start-game');
  const isClickButtonRepeat = event.target.classList.contains('add-div-button-game')
    || event.target.classList.contains('add-button-repeat');
  if (isClickButtonPlay && !isClickButtonRepeat) {
    addButtonPlayRepeat();
  }
  else if(isClickButtonPlay && isClickButtonRepeat){
    Game.repeatCardAudio();
  }
  checkboxBurger.checked = false;
  const isClickOnFigure = event.target.classList.contains('card')
    || event.target.classList.contains('card-name')
    || event.target.classList.contains('card-image');
  if (isClickOnFigure && isMainPage) {
    const textContSpan = event.target.closest('figure').querySelector('span').textContent;
    const deleteOldContainer = document.getElementById('div-container');
    deleteOldContainer.parentNode.removeChild(deleteOldContainer);
    new CategoryCreateHepler(textContSpan);
    isMainPage = false;
    addRemoveButtonPlay();
    deleteStyleTagA();
    removeButtonPlayRepeat();
    document.querySelectorAll('a').forEach((a) => {
      if (a.textContent === textContSpan) {
        a.classList.add('active-a');
      }
    });
  }
  const isClickOnButton1 = event.target.classList.contains('rotate');
  if (event.target.closest('figure') && !isPlayGame) {
    const text = event.target.closest('figure').querySelector('span').textContent;
    cards.forEach((elem) => elem.forEach((elems) => {
      if (elems.word === text) {
        const audio = new Audio();
        audio.preload = 'auto';
        audio.src = `./assets/audio/${text}.mp3`;
        audio.play();
      }
    }));
  }
  if (isClickOnButton1) {
    event.target.closest('figure').classList.add('active');
  }

  if (event.target.tagName === 'A') {
    Game = null;

    document.querySelectorAll('a').forEach((a) => a.classList.remove('active-a'));
    event.target.classList.add('active-a');
    if (event.target.href.split('#/')[1] === 'cards') {
      isMainPage = false;
      const deleteOldContainer = document.getElementById('div-container');
      deleteOldContainer.parentNode.removeChild(deleteOldContainer);
      new CategoryCreateHepler(event.target.textContent);
      // animation();
      addRemoveButtonPlay();
      removeButtonPlayRepeat();
    } else {
      isMainPage = true;
      const deleteOldContainer = document.getElementById('div-container');
      deleteOldContainer.parentNode.removeChild(deleteOldContainer);
      new MainPageCreateHelper();
      addPlayStyleMainPage();
      addRemoveButtonPlay();
      removeButtonPlayRepeat();
    }
  }
  if (event.target.classList.contains('hide-check')) {
    isPlayGame = !isPlayGame;
    addRemoveButtonPlay();
  }
  if (isPlayGame && event.target.closest('figure')) {
    document.querySelectorAll('figure').forEach((figure) => figure.classList.remove('isClick'));
    event.target.closest('figure').classList.add('isClick');
  }
  if(isPlayGame && event.target.classList.contains('img-active-play-game')){
    const text= event.target.closest('figure').querySelector('span').textContent;
    Game.isCorrectCard(text);
  }
  // if(isPlayGame && event.target.classList.contains('add-button-repeat')){
  //   console.log('play');
  //   Game.repeatCardAudio();
  // }
}
const animation = () => {
  if (!isPlayGame) {
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
  addRemoveButtonPlay();
  removeButtonPlayRepeat();
};
document.querySelector('.switch-container').addEventListener('click', animation);

document.onmouseover = function () {
  const isClickOnButton1 = event.target.classList.contains('cards');
  if (isClickOnButton1) {
    document.querySelectorAll('figure').forEach((figure) => figure.classList.remove('active'));
  }
};

function deleteStyleTagA() {
  document.querySelectorAll('a').forEach((a) => a.classList.remove('active-a'));
}

function addPlayStyleMainPage() {
  if (isPlayGame) {
    document.querySelectorAll('figure').forEach((div) => div.classList.add('play-style-figure'));
  }
}


function addRemoveButtonPlay() {
  if (isMainPage) {
    document.getElementById('button-game').classList.add('off-display');
  } else if (isPlayGame) {
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
}

function addButtonPlayRepeat() {
  document.getElementById('button-game').querySelector('span').textContent = '';
  document.getElementById('button-game').querySelector('span').classList.add('add-button-repeat');
  document.getElementById('button-game').classList.add('add-div-button-game');
  playGameStart();
}

function removeButtonPlayRepeat() {
  document.getElementById('button-game').querySelector('span').textContent = 'Start game';
  document.getElementById('button-game').querySelector('span').classList.remove('add-button-repeat');
  document.getElementById('button-game').classList.remove('add-div-button-game');
}

function playGameStart() {
  console.log('playGameStart');
  document.querySelectorAll('a').forEach((elem) => {
    if (elem.classList.contains('active-a')) {
     category = elem.textContent;
    }
  });
  Game = new GamePlayHelper(category);
  Game.playCardAudio();
}
