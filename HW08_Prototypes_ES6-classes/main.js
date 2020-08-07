class Student {
    static _estimations;
    static _isPresent;
    
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this._isPresent = true;
        this._estimations = [];
    }

    getInfo() {
        return "Студент " + this.course + "го курсу " + this.university + ", " + this.fullName;
    }

    get marks() {
        if (this._isPresent) return this._estimations
            else return null;
    }

    set marks(value) {
        if (this._isPresent) {
            this._estimations.push(value);
            return this.marks;
        } else return null;
    }

    getAverageMark() {
        return this._estimations.reduce((acc, item) => acc + item, 0) / this._estimations.length;
    }

    dismiss() {
        this._isPresent = false;
    }

    recover() {
        this._isPresent = true;
    }

};

class BudgetStudent extends Student {
    constructor(scholarship, university, course, fullName) {
        super(university, course, fullName);
        this.scholarship = scholarship;
    }

    getScholarship() {
        if (!this._isPresent) {
            console.log(`Студент ${this.fullName} був виключений. Однак в нашій країні за все можна домовитися, зверніться в деканат :)`);
            return null;
        }
        if (this.getAverageMark() >= 4) {
            console.log(`Студент ${this.fullName} отримав ${this.scholarship} грн. стипендії.`);
            return this.scholarship;
        } else {
            console.log(`Студент ${this.fullName} має середній бал менше 4, стипендія проходить повз. Поталанить наступного разу :) `);    
            return null;
          }
    }
}

// main()
const tabel = [5, 4, 4, 5];
const studentOdesa = new Student("Вища Школа Психотерапії м. Одеси", 1, "Остап Бендер Ісаакович");
console.log('Створюємо клас Student: const studentOdesa = new Student("Вища Школа Психотерапії м. Одеси", 1, "Остап Бендер Ісаакович")');
console.log(studentOdesa.getInfo());
for (let item of tabel) studentOdesa.marks = item;
console.log(`Поточні оцінки ${studentOdesa.fullName}: ${studentOdesa.marks}`);
console.log(`Додаємо оцінку: `, studentOdesa.marks = 5);
console.log(`Bиводимо всі оцінки: `, studentOdesa.marks);
console.log(`Середній бал ${studentOdesa.fullName}: ${studentOdesa.getAverageMark()}`);
console.log(`"Виключаємо" ${studentOdesa.fullName} методом studentOdesa.dismiss()`);
studentOdesa.dismiss();
studentOdesa.marks = 4
console.log(`Пробуємо додати оцінку "4". Виводимо всі оцінки: `, studentOdesa.marks, ". Нічого не змінилося");
console.log(`"Включаємо" ${studentOdesa.fullName} методом studentOdesa.recover()}`);
studentOdesa.recover();
console.log("");

// Advanced Level
const tabelBudget = [5, 4, 4, 5, 3, 4, 5];
// const tabelBudget = [3, 3, 4, 2, 3, 4, 5];
const studentKyiv = new BudgetStudent(1400, "Київський політехнічний інститут", 3, "Федорчук Михайло Володимирович");
console.log("--- Advanced Level ---");
console.log('Створюємо клас BudgetStudent: const studentKyiv = new BudgetStudent(1400, "Київський політехнічний інститут", 3, "Федорчук Михайло Володимирович")');
for (let item of tabelBudget) studentKyiv.marks = item;
console.log(`Середній бал ${studentKyiv.fullName}: ${+(studentKyiv.getAverageMark()).toFixed(2)}`);
studentKyiv.getScholarship();


/*
У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу.
1.   У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні
студента(в конструктор).
2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер",
метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
4. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
5. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена,
геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
6. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
7. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки
та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
8. Створіть метод this.recover, який дозволить поновити студента

Advanced
1. Створіть новий клас BudgetStudent, який повністю наслідує клас Student
2. Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. Отримання стипендії супроводжується
виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
3. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
4. Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )
*/