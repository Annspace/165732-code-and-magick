'use strict';

// var modalUser = document.querySelector('.setup');
// modalUser.classList.remove('hidden');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Мария', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLOR = ['black', 'red', ' blue', 'yellow', 'green'];

var wizards = [];

var POSITIONS = [0, 1];

var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var NUMBER_OF_EYES = 2;

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


var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var modalUser = document.querySelector('.setup');
var userName = modalUser.querySelector('.setup-user-name');
var eyesBlock = modalUser.querySelector('.setup-wizard .wizard-eyes');
var setupFireBall = modalUser.querySelector('.setup-fireball-wrap');


var closePopup = function () {
  modalUser.classList.add('hidden');
};

var openPopup = function () {
  modalUser.classList.remove('hidden');
};


setupOpen.addEventListener('click', openPopup);

setupClose.addEventListener('click', closePopup);

var open = function (button) {
  if (button === 13) {
    openPopup();
  }
};

var closeEnter = function (button) {
  if (button === 13) {
    closePopup();
  }
};

var closeEsc = function (button) {
  if (button === 27 && focusInput === 0) {
    closePopup();
  }
};

setupOpen.addEventListener('keydown', function (e) {
  open(e.keyCode);
});

// проверяем фокус
var focusInput = 0;
userName.addEventListener('focus', function () {
  focusInput = 1;
});

// если фокус снят
userName.addEventListener('blur', function () {
  focusInput = 0;
});

setupClose.addEventListener('keydown', function (e) {
  closeEnter(e.keyCode);
});

document.addEventListener('keydown', function (e) {
  closeEsc(e.keyCode);
});


var eyesWizard = document.querySelectorAll('#wizard-eyes rect');
var inputFireBall = document.querySelector('[name="fireball-color"]');
var inputEyeColor = document.querySelector('[name="eyes-color"]');

var flag = 0;
eyesBlock.addEventListener('click', function () {
  // пока флаг не дойдёт до конца массива colors
  // если дойдет, то обнуляется и всё заново (для того, чтобы цвета выбирались по порядку)
  if (flag < WIZARD_EYES_COLORS.length - 1) {
    flag++;
  } else {
    flag = 0;
  }
  for (i = 0; i < NUMBER_OF_EYES; i++) {
    eyesWizard[i].style.fill = WIZARD_EYES_COLORS[flag];
    inputEyeColor.setAttribute('value', WIZARD_EYES_COLORS[flag]);
  }

});


setupFireBall.addEventListener('click', function () {
  if (flag < WIZARD_FIREBALL_COLORS.length - 1) {
    flag++;
  } else {
    flag = 0;
  }
  setupFireBall.style.backgroundColor = WIZARD_FIREBALL_COLORS[flag];
  inputFireBall.setAttribute('value', WIZARD_FIREBALL_COLORS[flag]);
});
