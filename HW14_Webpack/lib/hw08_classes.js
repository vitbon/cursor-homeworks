class Student {
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
    if (this._isPresent) return this._estimations;else return null;
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

}

;

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

} // Advanced Level
// const tabelBudget = [5, 4, 4, 5, 3, 4, 5];
// const studentKyiv = new BudgetStudent(1400, "Київський політехнічний інститут", 3, "Федорчук Михайло Володимирович");
// console.log("--- Advanced Level ---");
// console.log('Створюємо клас BudgetStudent: const studentKyiv = new BudgetStudent(1400, "Київський політехнічний інститут", 3, "Федорчук Михайло Володимирович")');
// for (let item of tabelBudget) studentKyiv.marks = item;
// console.log(`Середній бал ${studentKyiv.fullName}: ${+(studentKyiv.getAverageMark()).toFixed(2)}`);
// studentKyiv.getScholarship();


export { Student, BudgetStudent };