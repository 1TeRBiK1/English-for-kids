# [English for kids](https://1terbik1.github.io/English-for-kids/)
## English for kids - SPA learning English words for children
## Application structure:
   * Main page
   * Category page
   
   ![](https://github.com/1TeRBiK1/English-for-kids/blob/dev/assets/img/screenshot.png)
## Description of pages
   1. Main page
   * the main page of the application contains links to pages with categories of words
   * each link contains a thematic picture and category name
   * links are duplicated in the pull-out side menu, which opens and hides by clicking on the icon in the upper left corner of the page
   * there is a Train/Play switch on the main page of the application and on the category pages
   2. Category page
   * the category page contains the category name and cards with words with the words of the subject
   * each card contains a thematic picture and a word in English
   * when you click on the card, the pronunciation of the word in English sounds
   * each card has a button that, when clicked, turns the card over. The translation of the word is placed on the back of the card.
   * the reverse rotation of the card to the front side occurs automatically when the mouse cursor moves outside the boundaries
## Application
   * the application works in training mode and in game mode.
   * adaptive layout , minimum page width 320px
   * Game mode:
       * сlicking the Train / Play switch turns on the game mode. The button, when clicked on which the card was turned over, and the text on the card is hidden. The "Start game" button appears. The size of the card does not change. Only the image remains on the card, which occupies its entire area
       * after clicking on the "Start game" button, the English pronunciation of a random word from those on the page sounds. For each page and for each game, random words are generated in a new way
       * after the first click on the "Start game" button, the caption on it changes to the "Repeat" icon, the appearance of the button changes. When you click on the "Repeat" button, the pronunciation of the word sounds again
       * if the user clicks on the active card with an incorrect answer, the "error" sound signal is heard
       * if the user clicks on the active card with the correct answer, the "correct" sound is heard and after it the pronunciation of a random word sounds from those that have not yet been sounded
       * the card with the guessed word becomes inactive, while its appearance changes. Clicks on an inactive card are not accompanied by sound effects, does not affect the game score
       * after the start of the game, each click on the active card is a correct or incorrect answer. These answers are presented as stars of different colors in the rating scale that appears in game mode. If there are too many stars and the scale is filled with them, the previous stars are hidden, new ones continue to be added
       * when all words in the category are guessed:
          * if everything is guessed correctly, the signal "success" sounds, the cards with words are hidden, a joyful smiley is displayed on the page
          * if there were mistakes when guessing the words, the signal "refusal", the cards sound hidden, a sad smiley face and the number of mistakes are displayed on the page
          * the application automatically redirects to the main page with a list of category categories
