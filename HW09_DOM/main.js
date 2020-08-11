const ROW = 5;
const MIN_HEX = 0x0;
const MAX_HEX = 0xffffff;

function getRndHEX() { 
  return "#"+(Number(Math.round(Math.random() * (MAX_HEX - MIN_HEX) + MIN_HEX)).toString(16)); 
}

function generateBlocks(block, cls, id) {
  const idBlock = document.getElementById(block);  
  for (let i=0; i<ROW; i++) {
    idBlock.innerHTML += `  
      <div>
        <div id="${id}${i}0" class="${cls}" style="background-color: ${getRndHEX()};"></div>
        <div id="${id}${i}1" class="${cls}" style="background-color: ${getRndHEX()};"></div>
        <div id="${id}${i}2" class="${cls}" style="background-color: ${getRndHEX()};"></div>
        <div id="${id}${i}3" class="${cls}" style="background-color: ${getRndHEX()};"></div>
        <div id="${id}${i}4" class="${cls}" style="background-color: ${getRndHEX()};"></div>
      </div> 
    `;
  }
}

generateBlocks("block_A", "chess", "a");

// Advanced Level
function generateBlocksInterval(id) {
  setInterval(function() {
    for (let i=0; i<ROW; i++)
      for (let j=0; j<ROW; j++) {
        let idElement = document.getElementById(`${id}${i}${j}`);
        idElement.style.backgroundColor = getRndHEX();        
      }
  }, 1000);
}

generateBlocksInterval("a");


/*
Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. Квадрати мають розташовуватись по 5 в ряд.
Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks();

Advanced зробіть так, щоб квадрати змінювали колір раз на секунду.
Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати функцію generateBlocksInterval(); Приклад виконаного ДЗ на відео

generateBlocksFlash("c");

function generateBlocksFlash(id) {
  const oldState = {};
  for (let i=0; i<ROW; i++)
    for (let j=0; j<ROW; j++) {
      let idElement = document.getElementById(`${id}${i}${j}`);
      oldState[`${id}${i}${j}`] = idElement;
      idElement.style.animation()
      
    }  
  
@keyframes example {
  from { background-color: red; }
  to   { background-color: yellow; }
}  
  
.chess {
  animation-name: example`PPPPPPPPP`;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

*/