const CHECKTIME = 50;
const CHINA_MIN = 13290;
const CHINA_MAX = 40917;
let chinaStr = '';
let diffDate;
let indexGen = 0;

function getRandomChinese(length) {
  diffDate = Date.now();
  chinaStr = '';
  if (!(Number.isInteger(length) && length > 1 && length < 16)) return Promise.reject('Некоректне введення');
  let times = length;
  return new Promise((resolve, reject) => {
    const intID = setInterval(() => {
      let sign = +Date.now().toString().slice(-5);
      if (sign > CHINA_MAX) sign = sign % CHINA_MIN + CHINA_MIN;
      if (sign < CHINA_MIN) sign = sign + CHINA_MIN;
      chinaStr += String.fromCharCode(sign);
      if (--times <= 0) {
        clearInterval(intID);
        diffDate = Date.now() - diffDate;
        resolve();
      }
    }, CHECKTIME);
  });
}

const comSpeech = ["COVID19 не уханські пролетарії винайшли, це все – прояви буржуазних американців!",
  "Aкція: подай документи на вступ до піонерів сьогодні і завтра вже співатимеш 'Інтернаціонал'!",
  "Подарунок від Мао Цзедуна: збірка його комуністичних творів. Давай свою адресу 'Нової Пошти'!",
  "Ти – записався добровольцем в комуністи? Партія і великий Мао чекають на твоє рішення!",
  "Бережіться від проникнення західної ідеології та свідомо не допускайте впливу буржуазних думок!"
]

function generateSpeech() {
  indexGen = (indexGen+1 > comSpeech.length) ? 0 : indexGen;
  return comSpeech[indexGen++];
}

function writeText(event) {
  const numberBtnID = document.getElementById("number_btn");
  numberBtnID.innerHTML = ` Вперед у світле майбутнє! `;
  const numbers = parseInt(document.getElementById("number").value);
  const promise = getRandomChinese(numbers);
  promise.then(() => {
    document.getElementById(`player`).play();
    const textID = document.getElementById("china_text");
    textID.innerHTML = `Партія сказала: &nbsp;<span>&nbsp;${chinaStr}&nbsp;</span>&nbsp; за ${diffDate} мсек.`;
    const translateID = document.getElementById("translate");
    translateID.innerHTML = `Переклад: <pre>&nbsp;&nbsp;${generateSpeech()}&nbsp;&nbsp;</pre>`;
  }).catch((message) => {
    console.log(message);
    const numberBtnID = document.getElementById("number_btn");
    numberBtnID.innerHTML = `Розкуркулимо! Треба 2...15!`;
  });
}

const numberBtn = document.getElementById("number_btn");
numberBtn.addEventListener("click", writeText);

/*
Створіть функцію, яка повертає проміс getRandomChinese(length). Функція працює таким чином:

Запускається цикл(підказка: можна використовувати while) length раз, кожен прохід циклу дивимось на останні 5 цифр
результату виклику методу Date.now() Наприклад отримали const sign = 16086;.
Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з китайськими ієрогліфами.
Час роботи проміса має складати length * 50ms.
(Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms
  while (times-- > 0) {
*/