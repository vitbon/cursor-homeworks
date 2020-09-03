const SITE_API = 'https://swapi.dev/api/';
const terminalID = document.getElementById("terminal");
const getFilm = 2;
  
const maleFemale = str => {
  let urlImg = "";
  switch(str) {
    case "male": urlImg = '<img src="./hw12_ajax_img/icon/male.png" alt="Sex Icon"></img>'; break;
    case "female": urlImg = '<img src="./hw12_ajax_img/icon/female.png" alt="Sex Icon"></img>'; break;
    default: urlImg = '<img src="./hw12_ajax_img/icon/NA.png" alt="Sex Icon"></img>';
  }
  return urlImg;
}

function makeCharacters() {
  let charData = {};
  const config = {
    method: 'GET',
    url: SITE_API + `films/${getFilm()}/`
  };
  return axios(config)
    .then(res => res.data.characters)
    .then(hero => hero.forEach(item => axios.get("https" + item.slice(4))
    .then(elem => console.log(elem)))
   ).catch(() => alert("Houston, we have a problem while getting the Characters"));
}

function renderCharacters(param) {
  const outChars = document.createElement("table");
  let urlAva = '';
  urlAva = `<img src="./hw12_ajax_img/ava/${param.data.name.split(' ').join('_')}.png" class="imgConst" alt="Avatar" onerror="this.src='./hw12_ajax_img/ava/NA-ava.png';"></img>`;
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

export {SITE_API, terminalID, getFilm, maleFemale, makeCharacters, renderCharacters};