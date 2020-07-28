// 1. Функція getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
function getRandomArray(length, min, max) {
  let arr = [];
  for (let j=0; j<length; j++) {
    arr.push(Math.round(Math.random() * (max - min) + min));
  }
  return arr;
}

const checkInt = numbers => numbers.filter(el => { if(el%1 === 0) return el; });

// 2. Функція getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів.
function getModa(numbers) {
  let arrSort = [];
  let modaIdx = 0;
  for (i=0; i<numbers.length; i++) arrSort.push([numbers[i], 0]);
  for (i=0; i<numbers.length; i++) {
    for (let j=0; j<numbers.length; j++) {
      if (arrSort[i][0] === arrSort[j][0]) arrSort[i][1]++;
    }
  }
  for (let i=0; i<numbers.length; i++) if (arrSort[i][1] > modaIdx) modaIdx=i;
  return arrSort[modaIdx][0];
}

// 3. Функція getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
const getAverage = numbers => numbers.reduce((acc, item) => acc += item, 0) / numbers.length;

// 4. Функція getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.
function getMedian(numbers) {
  let mediana;
  let arrSort = numbers.concat();
  arrSort = arrSort.sort((a, b) => a-b);
  if (arrSort.length%2) mediana = arrSort[(arrSort.length-1)/2];  //непарні
    else mediana = arrSort[arrSort.length/2-1];                   // парні
  return mediana;
}

// 5. Функція filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
const filterEvenNumbers = numbers => numbers.filter(item => { if(!(item%2)) return item });

// 6. Функція countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0.
const countPositiveNumbers = numbers => numbers.filter(item => { if(item>0) return item });

// 7. Функцію getDividedByFive(...numbers) – яка залишить тільки ті, які діляться на ціло на 5.
const getDividedByFive = numbers => numbers.filter(item => { if(item%5 === 0) return item });

// 8. Функція replaceBadWords(string) – яка розіб'є фразу на слова та замінить погані слова на зірочки (*)
const replaceBadWords = string => {
  const badWords = ["fuck", "shit", "pussy", "bitch"];
  let arrSort = string.split(" ");
  arrSort.forEach((element, idx, arr) => {
    badWords.forEach((elBad, idxBad, arrBad) => {
        if (arr[idx].toLowerCase().indexOf(elBad) >= 0) {
          let stars = '*'.repeat(elBad.length);
          arr[idx] = stars + arr[idx].slice(elBad.length);
          idxBad--;
        }
    });
  });
  return arrSort.join(" ");  
}
  
// 9. Функція divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
const divideByThree = word => {
  let arr = word.concat().toLowerCase();
  let arrOut = "";
  let k = 0;
  while (arr.length > 0) {
    arrOut += [arr.slice(0,3)] + ";" ;
    arr = arr.slice(3);
  }
  return arrOut.slice(0, arrOut.length-1).split(";");
}

// перебір елементів за допомогою рекурсії
function relocate(elem) { 
  let str = elem.concat();
  let final = "";
  let i; 
  let j;
  debugger;
  for (i=0; i>elem.length-2; i++) {
    for (j=i+1; j>elem.length-1; j++) {
      final += str + "~";      
    }
    str = str.slice(j, elem.length-1) + str.slice(j, elem.length-1) + str.slice(i,elem.length-2);
  }
  return final; 
}


const LENGTH = 15;
const MIN = 1;
const MAX = 100;
const dataHW = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const dataHW2 = [1, -2, 3, -4, -5, 6];
const dataHW3 = "Commander";
const dataHW3_2 = "Live";
const dataHW4 = "Google";
const dataHW5 = "Are you fucking kidding? Holy bitche's shit! Dirty pussy.";

const dataInt = checkInt(getRandomArray(LENGTH, MIN, MAX));
console.log(`Завдання 1. Масив випадкових цілих чисел = [${dataInt}].`);
const moda = getModa(dataHW);
console.log(`Завдання 2. Мода [${dataHW}] = ${moda}.`);
const average = getAverage(dataHW);
console.log(`Завдання 3. Середнє арифметичне [${dataHW}] = ${average}.`);
const mediana = getMedian(dataHW);
console.log(`Завдання 4. Медіана [${dataHW}] = ${mediana}.`);
const evenNumbers = filterEvenNumbers(dataHW);
console.log(`Завдання 5. Парні числа від [${dataHW}] = [${evenNumbers}].`);
const positiveNumbers = countPositiveNumbers(dataHW2);
console.log(`Завдання 6. Числа більші 0 від [${dataHW2}] = [${positiveNumbers}].`);
const dividedByFive = getDividedByFive(dataHW);
console.log(`Завдання 7. Числа, які діляться на 5 [${dataHW}] = [${dividedByFive}].`);
const badWords = replaceBadWords(dataHW5);
console.log(`Завдання 8. Замінюємо нелітературні слова [${dataHW5}] = [${badWords}].`);
const divByThree = divideByThree(dataHW3);
console.log(`Завдання 9. Розіб'ємо фразу на 3 букви [${dataHW3}] = [${divByThree}].`);
const divByThree2 = divideByThree(dataHW3_2);
console.log(`Завдання 9. Розіб'ємо фразу на 3 букви [${dataHW3_2}] = [${divByThree2}].`);

// const combinat = generateCombinations(dataHW4);
// console.log(`Завдання 10. Перестановки букв в слові [${dataHW4}] = [${combinat}].`);
// function relocate(elem) { 
//   let str = elem.concat();
//   let final = "";
//   let i; 
//   let j;
//   for (i=elem.length-2; i>=0; i--) {
//     for (j=elem.length-1; j>1; j--) {
//       final += str + "~";      
//     }
//     str = str.slice(j, elem.length-1) + str.slice(j, elem.length-1) + str.slice(i,elem.length-2);
//   }
//   return final; 
// }

// 10. Функція generateCombinations(word), яка видасть всі можливі перестановки (унікальні, без повторень) букв в слові.
// function generateCombinations(word) {
//   let arrOut = "";
//   let arrUniq = word.concat()
//                     .toLowerCase()
//                     .split("");
//   arrUniq = arrUniq.filter((item, idx) => idx === arrUniq.indexOf(item));

//   console.log(relocate("abcd"));
// }