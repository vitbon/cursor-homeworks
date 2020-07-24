const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const MARK_MIN = 1;
const MARK_MAX = 5;

const addAll = (...args) => [...args];
const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);

function getPairs(arr) {
  let outArr = [];
  outArr.push(addAll(arr[0], arr[2]));
  outArr.push(addAll(arr[1], arr[3]));
  outArr.push(addAll(arr[4], arr[5]));
  return outArr;
}

function getPairsTheme(arr, arr2) {
  let outArr = [];
  for (let i = 0; i < arr.length; i++) {
    outArr[i] = addAll(arr[i].join(" і "), arr2[i]);
  }
  return outArr;
}

function getStudentMarks(arr, arr2) {
  let outArr = [];
  for (let i = 0; i < arr.length; i++) {
    outArr[i] = addAll(arr[i], arr2[i]);
  }
  return outArr;
}
  
function getPairsMarks(arr, arr2) {
  let outArr = [];
  for (let i = 0; i < arr.length; i++) {
    outArr[i] = addAll(arr[i].join(" і "), arr2[i], getRandom(MARK_MIN, MARK_MAX));
  }
  return outArr;
}

const pairs = getPairs(students);
const pairsTheme = getPairsTheme(pairs, themes);
const studentMarks = getStudentMarks(students, marks);
const pairsMarks = getPairsMarks(pairs, themes);

// Вивід в console.log та на сторінку
document.writeln(`Завдання №1. Поділ на пари в новому масиві pairs[]:\<br\>`);
console.log(pairs);
for (let i = 0; i < pairs.length; i++) document.writeln(`pairs[${i}] = ${pairs[i]}\<br\>`);

document.writeln(`\<br\>Завдання №2. Пари та їх завдання в масиві pairsTheme[]:\<br\>`);
console.log(pairsTheme);
for (let i = 0; i < pairs.length; i++) document.writeln(`pairsTheme[${i}] = ${pairsTheme[i]}\<br\>`);

document.writeln(`\<br\>Завдання №3. Співставити оцінку(marks) зі студентом(students) в масиві studentMarks[]:\<br\>`);
console.log(studentMarks);
for (let i = 0; i < studentMarks.length; i++) document.writeln(`studentMarks[${i}] = ${studentMarks[i]}\<br\>`);

document.writeln(`\<br\>Завдання №4. Випадкова оцінка парі в масиві pairsMarks[]:\<br\>`);
console.log(pairsMarks);
for (let i = 0; i < pairsMarks.length; i++) document.writeln(`pairsMarks[${i}] = ${pairsMarks[i]}\<br\>`);