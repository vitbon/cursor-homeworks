const SITE_API = 'https://swapi.dev/api/';
const terminalID = document.getElementById("terminal");
// let curPlanet = 1;
// const arrPlanets = [];
let wookiee = "";

const toggleWookiee = () => wookiee = wookiee ? "" : "?format=wookiee";
const getFilm = () => +document.getElementById("chars").value;
  
const maleFemale = str => {
  let urlImg = "";
  switch(str) {
    case "male": urlImg = '<img src="img/icon/male.png" alt="Sex Icon"></img>'; break;
    case "female": urlImg = '<img src="img/icon/female.png" alt="Sex Icon"></img>'; break;
    default: urlImg = '<img src="img/icon/NA.png" alt="Sex Icon"></img>';
  }
  return urlImg;
}

function terminalClear () {
  let outChars = document.querySelectorAll("table");
  let i = outChars.length-1;
  while (i>=0) {
    terminalID.removeChild(outChars[i--]);
  }
} 

function makeCharacters() {
  const config = {
    method: 'GET',
    url: SITE_API + `films/${getFilm()}/` + wookiee
  };
  terminalClear();
  pageOld = currentPage = undefined;
  return axios(config)
    .then(res => res.data.characters)
    .then(hero => hero.forEach(item => axios.get(item + wookiee)
    .then(elem => renderCharacters(elem)))
   ).catch(() => alert("Houston, we have a problem while getting the Characters"));
}

function renderCharacters(param) {
  const outChars = document.createElement("table");
  let urlAva = '';
  urlAva = `<img src="img/ava/${param.data.name.split(' ').join('_')}.png" class="imgConst" alt="Avatar" onerror="this.src='img/ava/NA-ava.png';"></img>`;
  const urlImg = maleFemale(param.data.gender);

  if(terminalID.childElementCount < 2) {
    for(let j=0; j<2; j++) {
      const out = document.createElement("table");  
      out.innerHTML = 
        `<tr><td style="width: 76px;">Avatar</td>
        <td style="width: 200px;">Name</td>
        <td style="width: 100px;">Birth Year</td>
        <td style="width: 40px;">Sex</td></tr>`;    
      out.classList.add("thead");
      terminalID.appendChild(out);
    }
  }
  const out = document.createElement("table");
  outChars.innerHTML +=
    `<tr><td style="width: 55px;">${urlAva}</td>
    <td style="width: 200px;">${param.data.name}</td>
    <td style="width: 100px;">${param.data.birth_year}</td>
    <td style="width: 40px;">${urlImg}</td></tr>`;
  terminalID.appendChild(outChars);
}

function renderPlanet(pageNum) {
  let config = {
    method: 'GET',
    url: SITE_API + `planets/` + wookiee,
    params: {
      page: pageNum,
    },
  };
  return axios(config)
    .then(item => item.data.results)
    .then(elem => elem.forEach(res => {
      if(terminalID.childElementCount < 2) {
        for(let j=0; j<2; j++) {
          const out = document.createElement("table");  
          out.innerHTML = `<tr><td style="width: 200px; height: 44px;">Name</td>
          <td style="width: 200px;">Population</td></tr>`;        
          out.classList.add("thead");
          terminalID.appendChild(out);
        }
      }
      const out = document.createElement("table");
      out.innerHTML = `<tr><td style="width: 200px; height: 44px;">${res.name}</td>
                        <td style="width: 200px;">${res.population}</td></tr>`;
      terminalID.appendChild(out);      

  })).catch(() => alert('Houston, we have a problem while getting the Planets!'));     
}

let currentPage;
let pageOld;

function makePlanets(event) {
  const pager = function() {
    switch(event.currentTarget.id) {
      case "planets-next_btn": {
        if(pageOld !== undefined) {
          if (currentPage < 3) currentPage++; 
          break;
        }
      }
      case "planets-back_btn": if (currentPage > 1) currentPage--; break;
      default: currentPage = 1; break;
    }
  }();
  if(event.currentTarget.id === "planets_btn" || pageOld != currentPage) {
    terminalClear();
    renderPlanet(currentPage*2-1);
    renderPlanet(currentPage*2);
  }
  pageOld = currentPage;
}

function removeTransition(ev) {
  if (ev.propertyName !== "transform") return;
  this.classList.remove("start_ani");
}

const timerID = setInterval(function() {
  console.log(startBtn);
  startBtn.classList.add("start_ani");
}, 2200);

function playAudio() {
  audio.currentTime = 0;
  audio.play();
}

function finishIntro() {
  document.getElementById("player").play();
  document.querySelector(".main").classList.remove("visib_hidden");
  document.querySelector(".start").classList.add("opacity_0");   
  (async () => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => { 
        clearInterval(timerID);
        const startDiv = document.querySelector(".start");
        document.getElementById("container").removeChild(startDiv);
        resolve(1)
      }, 2500);
    })
  })();
}

const audio = new Audio('media/blaster.mp3');
const film = document.getElementById("chars");
const startBtn = document.querySelector(".start_button");
startBtn.addEventListener("transitionend", removeTransition);
document.querySelector(".start_button").addEventListener("click", finishIntro);
document.getElementById("chars_btn").addEventListener("click", makeCharacters);
document.getElementById("planets_btn").addEventListener("click", makePlanets);
document.getElementById("planets-back_btn").addEventListener("click", makePlanets);
document.getElementById("planets-next_btn").addEventListener("click", makePlanets);
document.querySelector(".main_columns").addEventListener("click", playAudio);

/*
https://swapi.dev/documentation – Працювати необхідно з цим API.
Інформацію про те, як влаштовано АПІ шукайте в документації!
Уявіть, що вам прийшло завдання на работі – все що залишив бекендер - це таку документацію та полетів у відпустку.
Дуже заохочується максимально креативний підхід до цього завдання – робіть стилі, додайте який-небудь приємний шрифт
(Якщо зовсім туго з ідеями шрифтів візьміть Roboto с Google Fonts).

___1. Створіть кнопку: "отримати інформацію". При натисканні на неї отримайте та відобразіть інформацію про усіх персонажів
5 епізоду зоряних війн(films/2). Зверніть увагу, що необхідно вивчити документацію та на її основі вивести інформацію
Виводимо тільки: повне ім'я персонажа, дата народження, стать(якщо зробите іконкою, буде взагалі ідеально).
БОНУС ПЛЮС: Якщо додумаєтесь, як зберігати і виводити фотки персонажів – буде дуже круто.
Я дам підказку: можна створити об'єкт з ключ=посилання_на_персонажа, значення=посилання_на_фотку
У самому АПІ фотографій нмає, але ДЗшка стане набагато приємніше виглядати з зображеннями персонажів!
___2. Виведіть список усіх планет, які були у зоряних війнах.
___3. Додайте кнопку next, яка завантажить наступну сторінку зі списком планет. Попередня сторінка при цьому має пропасти.
(відбувається заміна даних)
___4. ADVANCED: додайте до 1 завдання поле вводу з номером фільму(номер по порядку випуску фильму). Тепер при натисканні
а кнопку – необхідно отримати інформацію не про 5тий епізод, а про фільм, номер якого вказано у полі вводу.
Якщо вказана цифра 1 – потрібно передати запит на /films/1
___5. ADVANCED: Додайте кнопку перекладу на вукийську мову. Після натискання на кнопку – весь отриманий по апі контент
повинен перекластись на мову вуки.
Для цього достатньо додати до будь-якого запиту: ?format=wookiee.
При фантазії – можете ще і текст кнопок перекласти :)
*/

/*
  <link href="https://fonts.googleapis.com/css2?family=Saira:wght@400;600;700;800;900&family=Teko:wght@400;600;700&family=Titillium+Web:wght@400;600&display=swap" rel="stylesheet">  

  font-family: 'Saira', sans-serif;
  font-family: 'Teko', sans-serif;
  font-family: 'Titillium Web', sans-serif;
  font-family: 'Oswald', sans-serif;
*/