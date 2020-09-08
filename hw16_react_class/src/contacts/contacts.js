import React, {Component} from "react";
import "./contacts.css";

const contactsMock = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
}, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
}, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
}, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Іван",
  lastName: "Нечуй-Левицький",
  phone: "+380935554422",
  gender: "male"
}, {
  firstName: "Леся",
  lastName: "Українка",
  phone: "+380991234567",
  gender: "female"
}, {
  firstName: "Невідомий",
  lastName: "Безхатченко",
  phone: "+380999999999",
}, {
  firstName: "Остап",
  lastName: "Вишня",
  phone: "+380972231199",
  gender: "male"
}, {
  firstName: "Марко",
  lastName: "Вовчок",
  phone: "+380989876543",
  gender: "female"
}];

function getMFIcon(str) {
  let sign = "";
  switch (str) {
    case 'male': sign = "👨"; break;
    case 'female': sign = "👩"; break;
  }
  return sign;
}

export default class Contacts extends Component {
  state = {
    contacts: [...contactsMock], // TODO: Remove Mock
    filtered: [...contactsMock],
    search: '',
    isMale: true,
    isFemale: true,
    isUnisex: true
  };

  isMale = () => {
    this.setState( {isMale: !this.state.isMale});
    this.filterData();
  };

  isFemale = () => {
    this.setState({ isFemale: !this.state.isFemale });
    this.filterData();
  };

  isUnisex = () => {
    this.setState({ isUnisex: !this.state.isUnisex });
    this.filterData();
  };

  handleSearchChange = (ev) => {
    this.setState({search: ev.target.value});
    this.filterData();
  };

  filterData = () => {
    this.setState(() => {
      const searchLwr = this.state.search.toLowerCase();
      const fltr = this.state.contacts.filter(man =>
        ((man.gender === 'male') && this.state.isMale) ||
        ((man.gender === 'female') && this.state.isFemale) ||
        ((man.gender === undefined) && this.state.isUnisex))
        .filter(item =>
          item.firstName.toLowerCase().includes(searchLwr) ||
          item.lastName.toLowerCase().includes(searchLwr) ||
          item.phone.toLowerCase().includes(searchLwr) );
      console.log(fltr);
      return {
        filtered: [...fltr],
      }
    });
  }

  render() {
    return (
      <div className="bg">
        <div className="container">
          <div className="search">
            <input className="search__btn" type="search" placeholder="Search..." value={this.state.search}
                   onChange={this.handleSearchChange}>
            </input>
            <label className="check" id="man">
              <input type="checkbox" name="man" onChange={this.isMale} defaultChecked></input>
              👨
            </label>
            <label className="check" id="woman" onChange={this.isFemale}>
              <input type="checkbox" name="woman" checked={this.state.isFemale}></input>
              👩
            </label>
            <label className="check" id="unisex" onChange={this.isUnisex}>
              <input type="checkbox" name="unisex" checked={this.state.isUnisex}></input>
              undefined
            </label>
          </div>
          <div className="header">
            <span className="name">First Name</span>
            <span className="name">Last Name</span>
            <span className="phone">Phone</span>
            <span className="sex">Sex</span>
          </div>
            { this.state.filtered.map((cnt) => (
              <div className="contacts">
                <span className="name">{cnt.firstName}</span>
                <span className="name">{cnt.lastName}</span>
                <span className="phone">{cnt.phone}</span>
                <span className="sex">{getMFIcon(cnt.gender)}</span>  {/*  ♀ ♂ ⚲ ♂ ♀ 👩 👨 */}
              </div>
            ))}
        </div>
      </div>
    );
  }
};


// Завдання Basic:
//   У результаті у вас має вийти компонент Contracts, який працює з логікою (state) та компонент Contract, який просто
//   відображає номер телефону, ім'я та прізвище контакта.
// 1.	Відобразити список контактів (можна по дизайну орієнтуватись на iOS/Android контакти)
// 2.	Додати поле пошуку перед списком.
// 3.	При вводі тексту у поле пошуку – фільтрувати по прізвищу користувача.
// (Тобто, якщо у полі ввести "еріксон" – відобразиться лише контакт Маршен Еріксонян"
// Також невеликий план, який допоможе зробити правильно домашнє завдання
// 1.	Створюємо проєкт за допомогою CRA
// 2.	Створюємо компонент Contracts. (Робимо класовий або функціональний з хуками)
// 3.	Додаємо у state масив contacts Врахуйте, contacts потрібно додати всередину об'єкта state (!).
// Щоб можна було звертатись як state.contacts
// 4.	Пишемо метод render для відмальовки даних з state. На цьому етапі можна відобразити хоча б імена
// 5.	Створюємо компонент Contact. Робимо необхідну верстку
// 6.	З props дістаємо необхідні дані та розміщуємо їх у верстці (firstName, lastName, phone, gender)
// 7.	У компоненті Contacts – додайте у рендері масиву – компонент Contact. Ви можете передати всі значення з елементу
// вашого масиву state.contacts за допомогою spread оператора. {...contact}
// 8.	Дороблюємо стилізацію, виправляємо верстку якщо необхідно
// 9.	Додаємо поле вводу (input) перед списком контактів
// 10.	В state додаємо ще одне значення search
// 11.	Виводимо в value атрибут інпуту значення з state.search
// 12.	Додаємо обробник події onChange у інпута. Функція обробки події(handleSearchChange) – має змінювати state.search
// на підставі event.target.value
// 13.	Тепер ви можете додати логіку в функцію handleSearchChange. Вам необхідно брати початковий масив contacts
// та відфільтрувавши його за допомогою функції filter – помістити в state
// Завдання Advanced:
//   1.	Додайте іконку статі до контактів(Ч, Ж)
// 2.	Зробіть так, щоб пошук фільтрував по імені/прізвищу/номеру.
//   Наприклад: в полі пошуку введено "95" – ми побачимо контакти Барнеятаи Теодора
// Наприклад: в полі пошуку введено "він" – ми побачимо Анонімуса та Еріксоняна
// 3.	Додайте чекбокси зі статтю(ч, ж, не вказаний). По замовчуванню всі увімкнені. При відключенні чекбокса – відбувається фільтрація.
//   Наприклад: вказані чекбокси ч та не вказаний – ми побачимо Барнея, Теодора, Маршена та Анонімуса
// Наприклад: вказані чекбокси ж та не вказаний – ми побачимо Лілію, Робін та Анонімуса
// Наприклад: вказані чекбокси ч та ж – ми побачимо Лілію, Робін, Барнея, Теодора, Маршена
// Наприклад: вказаний чекбокс не вказані – ми побачимо Анонімуси