// Завдання №1
function getMaxDigit(number) {
  let str = number.toString();
  let status;
  let i = 9;

  while (i >= 0) {
    if (str.indexOf(i.toString()) >= 0) {
      status = i.toString();
      break;
    }

    i--;
  }

  return status;
} // Завдання №5


let getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min); // Завдання №7


let convertCurrency = value => {
  const UAH2USD = 0.036;
  const USD2UAH = 27.50;
  let str = value.toLowerCase();
  let money;

  if (str.indexOf("uah") >= 0) {
    money = parseFloat(`${parseFloat(str) * UAH2USD}`).toFixed(2) + "$";
  } else if (str.indexOf("$") >= 0) {
    money = parseFloat(`${parseFloat(str) * USD2UAH}`).toFixed(2) + " грн.";
  } else money = "Дані не містять ні UAH, ні $.";

  return money;
}; // Завдання №9


let deleteLetters = (char, sentence) => sentence.split(char.toLowerCase()).join('').split(char.toUpperCase()).join(''); // Завдання №10


function isPalyndrom(sentence) {
  const str = sentence.trim().toLowerCase().split(' ').join('');
  const len = str.length - 1;
  const lenDiv2 = Math.ceil(str.length / 2) - 1;
  let status = true;
  let i = 0;

  while (i < lenDiv2) {
    if (str.charAt(i) !== str.charAt(len - i)) {
      status = false;
      break;
    }

    i++;
  }

  return status;
} // Завдання №3


let toUpperName = name => {
  let str = name.trim().toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
}; // Завдання №11


const fnDeleteDupLetter = function deleteDuplicateLetter(words) {
  const str = words.trim().toLowerCase();
  let outStr = "";
  let char;
  let j = 0;

  do {
    char = str[j];
    if (str.indexOf(char) === str.lastIndexOf(char)) outStr += char;
  } while (str.length - 1 >= ++j);

  return outStr;
};

export { toUpperName, fnDeleteDupLetter };