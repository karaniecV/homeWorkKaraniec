//   Task №1

function getNumWord(num, word1, word2, word5) {
  let dd = num % 100;
  let oneDigit = num % 10;
  switch (dd || oneDigit) {
    case 11:
    case 12:
    case 13:
    case 11:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
      return word5;
    case 1:
      return word1;
    case 2:
    case 3:
    case 4:
      return word2;
    default:
      return word5;
  }
}

function makeTest() {
  let applesCount = parseInt(prompt('Сколько яблок?'));
  if (applesCount) {
    alert('У вас' + ' ' + applesCount + ' ' + getNumWord(applesCount,
      'яблоко', 'яблока', 'яблок'));
  }
}
makeTest();



//   Task №2

function anketa() {
  let lastName = prompt('Ваша фамилия');
  let firstName = prompt('Ваше имя');
  let patronymic = prompt('Ваше отчество');
  let age = parseInt(prompt('Ваш возраст в годах'));
  let day = age * 365;
  let sex = confirm('Ваш пол мужской?')
  sex = sex ? 'мужской' : 'женский';
  let old = age + 5;
  let pension = 'нет';
  if (age >= 62 && sex == 'мужской' || age >= 57 && sex == 'женский') {
    pension = 'да';
  };

  alert(`  ваше ФИО: ${lastName + ' ' + firstName + ' ' + patronymic}
  ваш возраст в годах: ${age}
  ваш возраст в днях: ${day}
  через 5 лет вам будет: ${old}
  ваш пол: ${sex}
  вы на пенсии: ${pension}`);
}
anketa();



//   Task №3

function palindrom(str) {
  var reverseArr = [];
  var arr = str.split('');
  for (var i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  return reverseArr.join('') === str
}
console.log(palindrom('12321'));




//   Task №4

function getMultiplyTable() {
  const body = document.body;
  const table = document.createElement('table');
  let tr, td, tdInner = '';

  table.style.width = '100%';
  table.setAttribute('border', '1');

  for (let i = 1; i <= 10; i++) {
    if (i === 1 || i === 6) {
      tr = document.createElement('tr');
    }
    td = document.createElement('td');
    for (let j = 1; j <= 10; j++) {
      tdInner += `<div style="padding: 5px">${i} * ${j} = ${i * j}</div>`;
    }

    td.innerHTML = tdInner;
    tr.append(td);
    if (i === 5 || i === 10) {
      table.append(tr);
    }
    tdInner = '';
  }

  body.append(table);
}

getMultiplyTable();