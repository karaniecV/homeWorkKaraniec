// Task1
let now = moment().format('hh:mm:ss');
let end = moment().format('23:59:59', 'hh:mm:ss');
let date = moment().format('YYYY-MM-DD');
let date1 = moment(`${date}T${now}+03:00`);
let date2 = moment(`${date}T${end}+03:00`);
let diff = date2.diff(date1, 'seconds');
alert(`${diff} секунд до конца дня`);


// Task2
function bday() {
    const mm = document.querySelector('#mm');
    const dd = document.querySelector('#dd');
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        let ddVal = dd.value;
        let mmVal = mm.value;
        let now = moment().format('YYYY-MM-DD');
        let now1 = moment().format('YYYY');
        let date1 = moment(`${now}T00:00:00+03:00`);
        let date2 = moment(`${now1}-${mmVal}-${ddVal}T00:00:00+03:00`);
        if (new Date(`${now}T00:00:00+03:00`) > new Date(`${now1}-${mmVal}-${ddVal}T00:00:00+03:00`)) {
            now1++;
            date2 = moment(`${now1}-${mmVal}-${ddVal}T00:00:00+03:00`);
        }
        let diff = date2.diff(date1, 'days');
        alert(`Да народзінаў ${diff} дзён`);
    })
}
bday();


// Task3
function stringTask1(str) {

   alert(`before:
   ${str}`)

    const myArr = ['FIVE,', 'FOUR,', 'THREE,', 'TEN!', 'NINE,', 'SEVEN,', 'EIGHT,'];

    let arr = str.split(' ');
    let result = arr;

    myArr.forEach((item) => {
        result = result.filter((result) => {
            return result !== item;
        });
    });
    return result;
}

alert(`after:
 ${stringTask1(`buckle my shoe 
 THREE, FOUR, knock at the door FIVE, 
 SEVEN, EIGHT, lay them straight 
 NINE, TEN!`)}`);


// Task4
const Users = [{ id: '1', name: 'Vasia', dob: '1999-03-01' },
               { id: '2', name: 'Jan', dob: '1999-07-01' },
               { id: '3', name: 'Mila', dob: '1999-05-11' },
               { id: '4', name: 'Andrus', dob: '1999-01-01' },
               { id: '5', name: 'Buj', dob: '1999-12-31' }]

function usersSort(param1, param2, param3) {
    let users = param1;
    if (param3 === 'desc') {
        users.sort((a, b) => a[param2] > b[param2] ? 1 : -1);
    } else if (param3 === 'asc') {
        users.sort((a, b) => a[param2] < b[param2] ? 1 : -1);
    }
    return users;
};

console.log(usersSort(Users, 'id', 'asc'));
console.log(usersSort(Users, 'name', 'desc'));
console.log(usersSort(Users, 'dob', 'asc'));