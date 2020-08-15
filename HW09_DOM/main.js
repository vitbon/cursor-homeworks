const ROW = 5;
const MIN_HEX = 0x0;
const MAX_HEX = 0xffffff;
const TIME = 1200;

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
generateBlocks("block_C", "chess_ani", "c");

// Advanced Level
function generateBlocksInterval(id, id2, time) {
  setInterval(function() {
    for (let i=0; i<ROW; i++)
      for (let j=0; j<ROW; j++) {
        let idElement = document.getElementById(`${id}${i}${j}`);
        let idElement2 = document.getElementById(`${id2}${i}${j}`);
        const rnd = getRndHEX();
        idElement.style.backgroundColor = rnd;
        idElement2.style.backgroundColor = rnd;        
      }
    }, time);
  }

generateBlocksInterval("a", "c", TIME);  

/*
Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. Квадрати мають розташовуватись по 5 в ряд.
Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks();

Advanced зробіть так, щоб квадрати змінювали колір раз на секунду.
Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати функцію generateBlocksInterval(); Приклад виконаного ДЗ на відео
*/