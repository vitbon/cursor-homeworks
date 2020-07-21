let row;
let correctInput = true;

do {
  row = +prompt("Марино, введіть число рядків від 1 до 9", 7);
  correctInput = !(Number.isInteger(row) && !isNaN(row) && (row >= 1 || row <= 9));
  if (correctInput) window.alert("Некоректне введення цілого числа. Спробуйте ще раз!");    
} while (correctInput); 

for (let i=1; i<=row; i++) {
  document.writeln (i + ": ");
  for (let j=1; j<=i; j++) document.writeln("#");
  document.writeln("\<br\>");
}