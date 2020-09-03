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
export default getRandom;