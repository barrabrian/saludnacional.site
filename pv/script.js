//DOM elements
const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next'
};


//remove class from a set of items
const removeClasses = (elemSet, className) => {

  elemSet.forEach(elem => {

    elem.classList.remove(className);

  });

};

//return exect parent node of the element
const findParent = (elem, parentClass) => {

  let currentNode = elem;

  while (!currentNode.classList.contains(parentClass)) {
    currentNode = currentNode.parentNode;
  }

  return currentNode;

};

//get active button step number
const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};

//set all steps before clicked (and clicked too) to active
const setActiveStep = activeStepNum => {

  //remove active state from all the state
  removeClasses(DOMstrings.stepsBtns, 'js-active');

  //set picked items to active
  DOMstrings.stepsBtns.forEach((elem, index) => {

    if (index <= activeStepNum) {
      elem.classList.add('js-active');
    }

  });
};

//get active panel
const getActivePanel = () => {

  let activePanel;

  DOMstrings.stepFormPanels.forEach(elem => {

    if (elem.classList.contains('js-active')) {

      activePanel = elem;

    }

  });

  return activePanel;

};

//open active panel (and close unactive panels)
const setActivePanel = activePanelNum => {

  //remove active class from all the panels
  removeClasses(DOMstrings.stepFormPanels, 'js-active');

  //show active panel
  DOMstrings.stepFormPanels.forEach((elem, index) => {
    if (index === activePanelNum) {

      elem.classList.add('js-active');

      setFormHeight(elem);

    }
  });

};

//set form height equal to current panel height
const formHeight = activePanel => {

  const activePanelHeight = activePanel.offsetHeight;

  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;

};

const setFormHeight = () => {
  const activePanel = getActivePanel();

  formHeight(activePanel);
};

//STEPS BAR CLICK FUNCTION
var quiz_score = 0;
var activeStep = 0;
//PREV/NEXT BTNS CLICK
DOMstrings.stepsForm.addEventListener('click', e => {

  const eventTarget = e.target;
  var ok = true;

  //check if we clicked on `PREV` or NEXT` buttons
  if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) ||
      eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`))) {
    return;
  }

  //find active panel
  const activePanel = findParent(eventTarget,
    `${DOMstrings.stepFormPanelClass}`);

  let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(
    activePanel);

  let nextPanel = 0;

  if (activePanelNum == 0) {
    nextPanel = 1;
    var radios = document.getElementsByName('q1');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        if (radios[i].value == "C") {
          quiz_score += 2.5;
        }
        break;
      }
    }
  } else if (activePanelNum == 1) {
    nextPanel = 2;
    var radios = document.getElementsByName('q2');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        if (radios[i].value == "B") {
          quiz_score += 2.5;
        }
        break;
      }
    }
  } else if (activePanelNum == 2) {
    nextPanel = 3;
    var radios = document.getElementsByName('q3');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        if (radios[i].value == "A") {
          quiz_score += 2.5;
        }
        break;
      }
    }
  } else if (activePanelNum == 3) {
    nextPanel = 4;
    var radios = document.getElementsByName('q4');
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        if (radios[i].value == "B") {
          quiz_score += 2.5;
        }
        break;
      }
    }
    console.log(quiz_score);

  }

  if (ok) {

    //set active step and active panel onclick
    if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
      if (activeStep == 1) {
        activePanelNum = 0;
      } else {
        activePanelNum--;
      }
      activeStep--;
    } else {

      activeStep++;
      activePanelNum = nextPanel;

    }

    setActiveStep(activeStep);
    setActivePanel(activePanelNum);

  }

});

//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight, false);

//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight, false);

//changing animation via animation select !!!YOU DON'T NEED THIS CODE (if you want to change animation type, just change form panels data-attr)

const setAnimationType = newType => {
  DOMstrings.stepFormPanels.forEach(elem => {
    elem.dataset.animation = newType;
  });
};

//selector onchange - changing animation
// const animationSelect = document.querySelector('.pick-animation__select');
//
// animationSelect.addEventListener('change', () => {
//   const newAnimationType = animationSelect.value;
//
//   setAnimationType(newAnimationType);
// });
