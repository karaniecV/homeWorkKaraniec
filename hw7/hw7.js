// // Task 1

fetch('https://cors-anywhere.herokuapp.com/' + 'https://api.darksky.net/forecast/782df41cc8f086cc823109fb02e0cfbd/53.6807701,23.831889?exclude=currently,flags,hourly&lang=be&units=auto')
  .then(response => response.json())
    .then(result => console.log(`Надвор'е на заўтра ў Гораднi:
      +${Math.round(result['daily']['data']['1']['temperatureLow'])} +${Math.round(result['daily']['data']['1']['temperatureHigh'])},
      вiльготнасць ${result['daily']['data']['1']['humidity'] * 100}%,
      хуткасць ветра ${Math.round(result['daily']['data']['1']['windSpeed'])}м/с з парывамi да ${Math.round(result['daily']['data']['1']['windGust'])}м/с,
      бачнасць ${Math.round(result['daily']['data']['1']['visibility'])}км,
      цiск ${result['daily']['data']['1']['pressure']} мм рт. сл.
      ${result['daily']['data']['1']['summary']}`))


// Task 2

function Timer(limit) {
    let intervalId = null;

    this.start = function () {
        return new Promise((resolve, reject) => {
            let value = limit.value;
            intervalId = setInterval(() => {
                if (value === 0) {
                    clearInterval(intervalId);
                    resolve('Timer was completed')
                };
                if (value < 0) {
                    clearInterval(intervalId)
                    reject('Eroor');
                }
                limit.value = value;
                value -= 1;
            }, 1000);
        });
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
const timer = new Timer(number);
const timer2 = new Timer(number1);

btnStart.addEventListener('click', () => {
    if (number1.value > 60) {
        alert('Enter a pause no more than 60 seconds!')
        return false;
    }
    promiseStart();
});

btnPause.addEventListener('click', (event) => {
    event.preventDefault();
    timer.pause();
    promiseStart2();
});


promiseStart2 = function () {
    timer2.start()
        .then((value) => {
            console.log(value);
        })
        .catch(error => console.log(error.message))
}

promiseStart = function () {
    timer.start()
        .then((value) => {
            console.log(value);
        })
        .catch(error => console.log(error.message))
}
