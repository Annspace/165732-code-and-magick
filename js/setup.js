'use strict';

var modalUser = document.querySelector('.setup');
modalUser.classList.remove('hidden');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Мария', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLOR = ['black', 'red', ' blue', 'yellow', 'green'];

var wizards = [];

var POSITIONS = [0, 1];

var randNumb = function (array) {
  var randElement = Math.floor(Math.random() * array.length);
  return randElement;
};

var CreateWizard = function (name, coatColor, eyesColor) {
  this.name = name;
  this.coatColor = coatColor;
  this.eyesColor = eyesColor;

};

for (var i = 0; i < 4; i++) {
  if (randNumb(POSITIONS) === 0) {
    wizards[i] = new CreateWizard(SURNAMES[randNumb(SURNAMES)] + ' ' + NAMES[randNumb(NAMES)], COAT_COLOR[randNumb(COAT_COLOR)],
        COAT_COLOR[randNumb(COAT_COLOR)], EYES_COLOR[randNumb(EYES_COLOR)]);
  } else {
    wizards[i] = new CreateWizard(NAMES[randNumb(NAMES)] + ' ' + SURNAMES[randNumb(SURNAMES)], COAT_COLOR[randNumb(COAT_COLOR)],
        COAT_COLOR[randNumb(COAT_COLOR)], EYES_COLOR[randNumb(EYES_COLOR)]);
  }
}


var SimilarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var SetupSimilar = document.querySelector('.setup-similar');
SetupSimilar.classList.remove('hidden');
var fragment = document.createDocumentFragment();

var renderWizard = function (wizard) {
  var WizardElement = SimilarWizardTemplate.cloneNode(true);
  WizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  WizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  WizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return WizardElement;
};

for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
document.querySelector('.setup-similar-list').appendChild(fragment);

