function enterCorrectNumber(text) {
  let number = .0;
  let correctInput = true;

  do {
    number = +prompt(text);
    correctInput = !(Number.isInteger(number) && !Number.isNaN(number));
    if (correctInput) window.alert("Некоректне введення цілого числа. Спробуйте ще раз!");
  } while (correctInput);

  return number;
}

let userNumberN = 0;
let userNumberM = 0;
let totalSum = 0;
let isNeedSkipEven = true;
let isNMcorrect = true;
let outputStr = "";
const totalfnSum = suma(1, 10, true);
export default function suma(SuserNumberN, SuserNumberM, SisNeedSkipEven) {
  let StotalSum = 0;

  for (let counter = SuserNumberN; counter <= SuserNumberM; counter++) {
    if (!(counter % 2) && SisNeedSkipEven) continue;
    StotalSum += counter;
  }

  return StotalSum;
}
;