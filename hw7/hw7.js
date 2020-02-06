// // Task 1

// fetch('https://cors-anywhere.herokuapp.com/' + 'https://api.darksky.net/forecast/782df41cc8f086cc823109fb02e0cfbd/53.6807701,23.831889?exclude=currently,flags,hourly&lang=be&units=auto')
//     .then(response => response.json())
//     .then(result => renderResponce(result));

// function renderResponce(result) {
//     const data = result['daily']['data']['1'];
//     console.log(`Надвор'е на заўтра ў Гораднi:
//       ${Math.round(data['temperatureLow'])} ${Math.round(data['temperatureHigh'])},
//       вiльготнасць ${data['humidity'] * 100}%,
//       хуткасць ветра ${Math.round(data['windSpeed'])}м/с з парывамi да ${Math.round(data['windGust'])}м/с,
//       бачнасць ${Math.round(data['visibility'])}км,
//       цiск ${Math.round(data['pressure'])} мм рт. сл.
//       ${data['summary']}`)
// }

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
            this.start()
                .then(resolve => console.log(resolve));
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
    timer.start()
});

btnPause.addEventListener('click', (event) => {
    event.preventDefault();
    timer.pause();
    timer2.start()
        .then(resolve => console.log(resolve))
});