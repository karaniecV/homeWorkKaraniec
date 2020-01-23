// // Task 1
function Timer(limit) {
  let intervalId = null;

  this.start = function () {
    let value = limit.value;
      intervalId = setInterval(() => {
      if (value === 0 | value < 0) {
        clearInterval(intervalId);
      }
      limit.value = value;
      value -= 1;
    }, 1000);
  };

  this.pause = function () {
    clearInterval(intervalId);
    let timeLimit = number1.value * 1000;
    setTimeout(() => {
      this.start();
    }, timeLimit);
  };
}
const number = document.querySelector('#number');
const number1 = document.querySelector('#number1');
const btnStart = document.getElementById('btn-start');
const btnPause = document.getElementById('btn-pause');
const timer = new Timer( number);

btnStart.addEventListener('click', () => {
  if (number1.value > 60) {
    alert('Enter a pause no more than 60 seconds!')
    return false;
  }
  timer.start();
});

btnPause.addEventListener('click', () => {
  timer.pause();
});



// // Task 2

function Tonometer(renderEl, limit, input) {
  let value = limit;
  let intervalId = null;
  const el = renderEl;

  this.start = function() {
    if (value > 0) {
        intervalId = setInterval(() => {
            el.innerHTML = `Измерение начнется через ${value}`;
            value -= 1;
            if (value === 0) {
                clearInterval(intervalId);
                this.set();
            }
        }, 1000);
    }
};

  this.set = function () {
    el.innerText = `Измерение...`;
    this.pause();
  };

  this.pause = function () {
    setTimeout(() => {
      el.innerHTML = `Введи количество ударов`;
    }, 15000);
  };

  this.hits = function () {
    let value = input.value * 4;
    el.innerHTML = value;
  };
}

const timerUIElement = document.getElementById('message');
const input = document.querySelector('input');
const startBtn = document.getElementById('start');
const loadBtn = document.getElementById('load');
const tonometer = new Tonometer(timerUIElement, 5, input);

startBtn.addEventListener('click', () => {
  tonometer.start();
});
loadBtn.addEventListener('click', () => {
  tonometer.hits();
});



// Task 3

function getRandom(min = 1, max = 1000000) {
  
  let random = setInterval(() => {
    min = Math.ceil(min);
    max = Math.floor(max);
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    if ((result % 2) === 0) {
      console.log(`Error ${result}`)
    } else console.log(`Success${result}`)
  }, 1000);

  setTimeout(() => {
    clearInterval(random);
  }, 20000);
}
getRandom();

