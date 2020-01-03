let arr = [-5];
function positiveSum(array){
    let sum = 0;
    for(i = 0; i < array.length; i++){
        if (array[i] > 0){
        sum += array[i];
        }
    }
    return sum;
}s
console.log(positiveSum(arr));


function evenOrOdd(str){
    var getStr = String(str);
    getStr.split('');
    if(getStr[0] < getStr[1]){
        return 'Even';
    } if (getStr[0] > getStr[1])
        return 'Odd';

}
console.log(evenOrOdd(876));

let year = 2001;
function centuryFromYear(year) {
    let ost = year % 100;
    let del = year / 100;
    if (ost == 0) {
        return Math.trunc(del);
    } else {
        return Math.trunc(del) + 1;
    }
}
console.log(centuryFromYear(year));

let array1 = [1, 2, 3];
let array2 = [2];

function arrayDiff(array1, array2) {
    var result = [];
    array1.forEach(function(el) {
      if (array2.indexOf(el) == -1) {
        result.push(el);
      }
    });
    return result;
  }
  console.log(arrayDiff(array1, array2));