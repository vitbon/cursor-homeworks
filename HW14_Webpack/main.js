
const fontLetters = "з'їж ще цих французьких булочок та випий філіжанку львівської кави.";
const idGenerator = createIdGenerator();
const fontGenerator = newFontGenerator(14);
const uniqText = document.getElementById('uniq_text');
const uniqBtn = document.getElementById('uniq_btn');
const fontText = document.getElementById('font_text');
const fontDownBtn = document.getElementById('font_down_btn');
const fontUpBtn = document.getElementById('font_up_btn');

uniqBtn.addEventListener("click", pressUniqBtn);
fontText.innerHTML = fontLetters;
fontDownBtn.addEventListener("click", () => pressFontBtn("down"));
fontUpBtn.addEventListener("click", () => pressFontBtn("up"));
pressFontBtn();

/*
Це домашнє завдання не має правильного рішення (!). Ваша задача в цьому завданні – практика з webpack.
Необхідно створити окремий модуль з кожного вашого домашнього завданнч. Експортуйте функції, які необхідно було зробити у попередніх ДЗ за допомогою export


Завдання:
Створити вебпак конфіг, який збирає ваш проект з різних модулів. Налаштуйте транспіляцію коду за допомогою babeljs до стандарту ES5.
Підключіть loader зображень (можна взяти абсолютно будь-яке) та css стилів. Якщо у вас є стилі по вашим домашнім завданням всередині JS коду або як окремий css файл – імпортуйте їх окремими файлами через спеціальний лоадер import "example.css";
Ваш головний файл index.js повинен імпортувати та викликати хоча б по 1ій функції з кожного зробленого вами раніше домашнього завдання.
*/