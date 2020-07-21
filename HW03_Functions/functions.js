// Завдання №1
function getMaxDigit(number) {
  let str = number.toString();
  let status;
  let i=9;

  while (i >= 0) {
    if (str.indexOf(i.toString()) >= 0) {
      status = i.toString();
      break;
    }
    i--;
  }
  return status;
}

// Завдання №3
let toUpperName = name => {
  let str = name.trim().toLowerCase();  
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Завдання №5
let getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

// Завдання №7
let convertCurrency = value => { 
  const UAH2USD = 0.036;
  const USD2UAH = 27.50;
  let str = value.toLowerCase();
  let money;

  if (str.indexOf("uah") >= 0) {
    money = parseFloat(`${parseFloat(str) * UAH2USD}`).toFixed(2) + "$";
   } else if (str.indexOf("$") >= 0 ) { 
        money = parseFloat(`${parseFloat(str) * USD2UAH}`).toFixed(2) + " грн.";
      } else money = "Дані не містять ні UAH, ні $.";
  return money;
}

// Завдання №9
let deleteLetters = (char, sentence) => sentence.split(char.toLowerCase()).join('').split(char.toUpperCase()).join('');

// Завдання №10
function isPalyndrom(sentence) {
  const str = sentence.trim().toLowerCase().split(' ').join('');
  const len = str.length - 1;
  const lenDiv2 = Math.ceil(str.length / 2) - 1;
  let status = true;
  let i=0;
  
  while (i < lenDiv2) {
    if (str.charAt(i) !== str.charAt(len-i)) {
      status = false;
      break;
    }
    i++;
  }
  return status;
} 

document.writeln('Завдання №1. Отримати число та вивести найбільшу цифру в цьому числі.' + '\<br\>');
document.writeln('getMaxDigit(3.1416) -> ' + getMaxDigit(3.1416) + "\<br\>\<br\>");

document.writeln('Завдання №3. Форматування імені, роблячи першу букву великою.' + '\<br\>');
document.writeln('toUpperName("  вОлОдИмиР ") -> ' + toUpperName("  вОлОдИмиР ") + "\<br\>\<br\>");

document.writeln('Завдання №5. Повернути випадкове ціле число в діапазоні від N до M.' + '\<br\>');
document.writeln('getRandomNumber(3, 15) -> ' + getRandomNumber(3, 15) + "\<br\>\<br\>");

document.writeln('Завдання №7. Конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH.');
document.writeln('convertCurrency("3400.40UAH") -> ' + convertCurrency("3400.40UAH") + '\<br\>');
document.writeln('convertCurrency("120$") -> ' + convertCurrency("120$") + '\<br\>');
document.writeln('convertCurrency("532.80CHR") -> ' + convertCurrency("532.80CHR") + '\<br\>\<br\>');

document.writeln('Завдання №9. Видаляє всі букви з речення.' + '\<br\>');
document.writeln('deleteLetters("a", " BlaBlaCAR is your Super car") -> ' + deleteLetters("a", " BlaBlaCAR is your Super car") + "\<br\>\<br\>");

document.writeln('Завдання №10. Перевірка речення на паліндром.' + '\<br\>');
document.writeln('isPalyndrom(" Аргентина манит   негра   ") -> ' + isPalyndrom(" Аргентина манит   негра   ") + "\<br\>\<br\>");