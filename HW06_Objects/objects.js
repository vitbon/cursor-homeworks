const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

// 1. Функція getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента
function getSubjects(number) {
  const obj = Object.keys(Object.entries(number)[2][1]);
  let subjects = [];
  let final = [];
  for (let item of obj) {
    subjects.push(item);
  }
  subjects.forEach((item, idx, arr) => {
    final[idx] = item.charAt(0).toUpperCase() + item.slice(1);
    final[idx] = final[idx].replace(/_/g, " ");
  });
  return final;
}

// 2. Функція getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку.
function getAverageMark(number) {
  let obj = Object.values(number.subjects);
  const aggregator = array => array.reduce((acc, item) => acc + ((item instanceof Array) ? aggregator(item) : item), 0);
  let marks = [];
  let marksTotal = 0;
  for (let item of obj) { 
    marks.push(item);
    marksTotal += item.length;
  }  
  return (aggregator(marks) / marksTotal).toFixed(2);
}

// 3. Функція getStudentInfo(students[0]) – яка повертає інформацію загального виду по переданому студенту. ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.
function getStudentInfo(number) {
  let obj = JSON.parse(JSON.stringify(number));
  obj.average = getAverageMark(number);
  delete obj.subjects;
  return obj;
}

// 4. Функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.
function getStudentsNames(students) {
  const obj = Object.assign(students);
  let arrOut = [];
  for (let item in obj) arrOut.push(obj[item].name);
  return arrOut.sort((a,b) => b - a);
}

// 5. Функція getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
function getBestStudent(students) {
  let obj = JSON.parse(JSON.stringify(students));
  for (let item in students) {
    obj[item].avMark = +getAverageMark(students[item]);
  }
  let maxIndex = 0;
  let max = obj[0].avMark;
  obj.forEach((item, idx) => { 
    if (max < item.avMark) {
      max = item.avMark;
      maxIndex = idx;
    }
  });
  return obj[maxIndex].name;
}

// 6. Функція calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
function calculateWordLetters(string) {
  const text = string.toLowerCase().split("");
  let result = {};
  text.forEach(item => { result[item] = result[item] ? result[item]+1
                                                     : 1 
  });
  return result;
}


console.log(`Завдання 1. getSubjects(students[0]) --> `, getSubjects(students[0]));
console.log(`Завдання 2. getAverageMark(students[0]) --> `, getAverageMark(students[0]));
console.log(`Завдання 3. getStudentInfo(students[0]) --> `, getStudentInfo(students[0]));
console.log(`Завдання 4. getStudentsNames(students) --> `, getStudentsNames(students));
console.log(`Завдання 5. getBestStudent(students) --> `, getBestStudent(students));
console.log(`Завдання 5. calculateWordLetters("ТеСт") --> `, calculateWordLetters("ТеСт"));