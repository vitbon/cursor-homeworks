import axios from 'axios';
import priceWithoutCopeeks from './hw01_variables.js';
import suma from './hw02_conditions';
import {toUpperName, fnDeleteDupLetter} from './hw03_functions.js';
import getRandom from './hw04_arrays.js';
import divideByThree from './hw05_arraysSorting.js';
import calculateWordLetters from './hw06_objects.js'; // ???
import {random, ukraine} from './hw07_this.js';
import {Student, BudgetStudent} from './hw08_classes.js';
import {getRndHEX, generateBlocks, generateBlocksInterval} from './hw09_DOM.js';
import './hw09_DOM.css';
import playSoundKbd from './hw10_events.js';
import getRandomChinese from './hw11_promices';
import {SITE_API, terminalID, getFilm, maleFemale, makeCharacters, renderCharacters} from './hw12_ajax';
import './hw12_ajax.css';
import createIdGenerator from './hw13_generators';

const br = "\<br/\>";
const pTag = document.createElement('p');
pTag.innerHTML = `HW01: Сума цілих чисел без копійок priceWithoutCopeeks, що округлена в меншу сторону: ${priceWithoutCopeeks} грн.${br}`;
pTag.innerHTML += `HW02: Сума чисел suma(1, 10, true) з пропуском непарних чисел = ${suma(1, 10, true)}${br}`;
pTag.innerHTML += `HW03: toUpperName("test of RESt") = ${toUpperName("test of RESt")}, fnDeleteDupLetter("test of RESt") = ${fnDeleteDupLetter("test of RESt")}${br}`;
pTag.innerHTML += `HW04: getRandom(5, 100) = ${getRandom(5, 100)}${br}`;
pTag.innerHTML += `HW05: divideByThree("WeAreLearningReact") = ${divideByThree("WeAreLearningReact")}${br}`;
pTag.innerHTML += `HW06: calculateWordLetters("cacao") = ${calculateWordLetters("cacao")} ${br}`;
pTag.innerHTML += `HW07: random(2, 10) = ${random(2, 10)}${br}`;
const studentKyiv = new BudgetStudent(1400, "Київський політехнічний інститут", 3, "Федорчук Михайло Володимирович");
pTag.innerHTML += `HW08: studentKyiv.fullName = ${studentKyiv.fullName} ${br}`;
// /hw09_DOM.js
generateBlocks("block_A", "chess", "a");
generateBlocks("block_C", "chess_ani", "c");
generateBlocksInterval("a", "c", 1100); 

// hw11
const promise = getRandomChinese(5); 
  promise.then(message => {
    console.log(message);
    pTag.innerHTML += `HW11: Китайські єрогліфи: ${message}${br}`;
      }).catch(mes => {
    console.log(mes);
    });

// hw13
const idGenerator = createIdGenerator();
pTag.innerHTML += `HW13: idGenerator.next().value = ${idGenerator.next().value}${br}`;

document.getElementById("hw_up").appendChild(pTag);

// hw12
makeCharacters();

/*
Це домашнє завдання не має правильного рішення (!). Ваша задача в цьому завданні – практика з webpack.
Необхідно створити окремий модуль з кожного вашого домашнього завданнч. Експортуйте функції, які необхідно було зробити у попередніх ДЗ за допомогою export

Завдання:
Створити вебпак конфіг, який збирає ваш проект з різних модулів. Налаштуйте транспіляцію коду за допомогою babeljs до стандарту ES5.
Підключіть loader зображень (можна взяти абсолютно будь-яке) та css стилів. Якщо у вас є стилі по вашим домашнім завданням всередині JS коду або як окремий css файл – імпортуйте їх окремими файлами через спеціальний лоадер import "example.css";
Ваш головний файл index.js повинен імпортувати та викликати хоча б по 1ій функції з кожного зробленого вами раніше домашнього завдання.
*/