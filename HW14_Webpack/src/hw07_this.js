const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const MIN_COUNTRY = 0;
const MAX_COUNTRY = 2;
const random = (min, max) => Math.round(Math.random() * (max - min) + min);
const parseMoney = number => parseFloat(number.toFixed(2));

// 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як
// IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this
function getMyTaxes(salary) {
    return parseMoney(salary * this.tax);
}

// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платять IT-спеціалісти
// у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this
function getMiddleTaxes() {
    return parseMoney(this.tax * this.middleSalary);
}

// 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти 
// у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this
function getTotalTaxes() {
    return parseMoney(this.tax * this.middleSalary * this.vacancies);
}

// 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } 
// кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної 
// країни та значення salary.
// profit = salary - taxes;

function getMySalary(country) {
    const MIN_SALARY = 1500;
    const MAX_SALARY = 2000;
    const outObject = {};
    
    setInterval(function() {
        const salary = random(MIN_SALARY, MAX_SALARY);
        outObject.salary = salary;
        outObject.taxes = parseMoney(salary * country.tax);
        outObject.profit = salary - outObject.taxes;
        console.log(outObject);
    }, 10000);
}

export {random, ukraine};

// console.log(`Завдання 1. getMyTaxes(salary) --> getMyTaxes.call(ukraine, 2000) = `, getMyTaxes.call(ukraine, 2000));
// console.log(`Завдання 2. getMiddleTaxes() --> getMyTaxes.call(country): `);
// console.log(`\t\t\tgetMiddleTaxes.call(ukraine) = `, getMiddleTaxes.call(ukraine));
// console.log(`\t\t\tgetMiddleTaxes.call(latvia) = `, getMiddleTaxes.call(latvia));
// console.log(`\t\t\tgetMiddleTaxes.call(litva) = `, getMiddleTaxes.call(litva));
// console.log(`Завдання 3. getTotalTaxes() --> getTotalTaxes.call(country): `);
// console.log(`\t\t\tgetTotalTaxes.call(ukraine) = `, getTotalTaxes.call(ukraine));
// console.log(`\t\t\tgetTotalTaxes.call(latvia) = `, getTotalTaxes.call(latvia));
// console.log(`\t\t\tgetTotalTaxes.call(litva) = `, getTotalTaxes.call(litva));
// console.log(`Завдання 4. Функція getMySalary(country) – яка пише в консоль об'єкт: { salary: number, taxes: number, profit: number } кожні 10 секунд.`);
// getMySalary(ukraine);