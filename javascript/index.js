const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');
let intervalId = null;

function printTime() {
  // ... your code goes here
intervalId = setInterval(() => {
  getMinutes();
  getSeconds();
}, 1000);

}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes)
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds)
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[0];

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here

}

function clearSplits() {
  // ... your code goes here
  btnRightElement.innerHTML = 'RESET'
  btnRightElement.classList.remove('split')
  btnRightElement.classList.add('reset')
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP'
  btnLeftElement.classList.remove('start')
  btnLeftElement.classList.add('stop')
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START'
  btnLeftElement.classList.remove('stop')
  btnLeftElement.classList.add('start')
  chronometer.start()
}

function setResetBtn() {
  btnRightElement.innerHTML = 'SPLIT'
  btnRightElement.classList.remove('reset')
  btnRightElement.classList.add('split')
  
  console.log(chronometer.reset());
  chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains('start')){
    setStopBtn();
    setResetBtn()


  }else if(btnLeftElement.classList.contains('stop')){
    setStartBtn();
    clearSplits()


  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // if(btnRightElement.className.includes('reset'))setResetBtn(reset());
  // else if (btnRightElement.className.includes('split')) split(setSplitBtn);
  chronometer.split(setSplitBtn);
});
