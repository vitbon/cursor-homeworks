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

let userNumberN = userNumberM = totalSum = 0;
let isNeedSkipEven = isNMcorrect = true;
let outputStr = "";

do {
  userNumberN = enterCorrectNumber("Введіть ціле число N");
  userNumberM = enterCorrectNumber("Введіть ціле число M");
  isNMcorrect = (userNumberN >= userNumberM);
  if (isNMcorrect) window.alert("N > M. Повторіть спробу, число N повинне бути меншим за M.");
} while (isNMcorrect);

isNeedSkipEven = confirm(`Чи потрібно пропускати парні числа?\nYES/OK – потрібно, NO/Cancel – не потрібно.`);
  
for (let counter = userNumberN; counter <= userNumberM; counter++) {
  if (!(counter % 2) && isNeedSkipEven) continue; 
  totalSum += counter;
}

outputStr = `Користувач ввів такі значення: N = ${userNumberN}, M = ${userNumberM}.\<br\>
Пропускати парні = ${isNeedSkipEven}. \<br\>
Сума чисел від N до M = ${totalSum}.`;
  
document.writeln(outputStr);
console.log(outputStr.split('\<br\>').join(''));