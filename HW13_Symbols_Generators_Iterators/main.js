function createIdGenerator() {
  let id = 0;
  return {
    next() {
      id++;
      const symbol = Symbol(id);
      return {
        value: symbol.description,
        done: false
      };
    }
  };
}

function newFontGenerator(init = 14) {
  let font = init;
  return {
    next(upDown) {
      switch (upDown) {
        case "down":
          if (font >= 4) font -= 2;
          break;
        case "up":
          font += 2;
          break;
      }
      return {
        value: font,
        done: false
      };
    }
  }
}

function pressUniqBtn() {
  const separator = uniqText.innerHTML ? ", " : "";
  uniqText.innerHTML += separator + idGenerator.next().value;
}

function pressFontBtn(event) {
  const fontSize = fontGenerator.next(event).value;
  fontText.style.fontSize = fontSize + 'px';
  fontText.innerHTML = `${fontSize} px: ` + fontLetters;
}

const fontLetters = "з'їж ще цих французських булочок та випий філіжанку львівської кави.";
const idGenerator = createIdGenerator();
const fontGenerator = newFontGenerator(14);
const uniqText = document.getElementById('uniq_text');
const uniqBtn = document.getElementById('uniq_btn');
const fontText = document.getElementById('font_text');
const fontDownBtn = document.getElementById('font_down_btn');
const fontUpBtn = document.getElementById('font_up_btn');

uniqBtn.addEventListener("click", pressUniqBtn);
fontText.innerHTML = fontLetters;
fontDownBtn.addEventListener("click", () => pressFontBtn("down"));
fontUpBtn.addEventListener("click", () => pressFontBtn("up"));

/*
Завдання 1:
Створіть нескінченний генератор ідентифікаторів. Повинен працювати наступним чином:
const idGenerator = createIdGenerator();
idGenerator.next().value -> 1
idGenerator.next().value -> 2
idGenerator.next().value -> 3
...

Завдання 2 (advanced)
Створіть генератор, який буде регулювати розміри шрифту для вашого сайту. (Можна допрацювати, щоб реально змінював шрифт, але це не є обов'язковою умовою)
Працювати генератор буде наступним чином:
const fontGenerator = newFontGenerator(14); // 14 – стартове значення
fontGenerator.next("up").value -> 14
fontGenerator.next("up").value -> 16
fontGenerator.next("up").value -> 18
fontGenerator.next().value -> 18
fontGenerator.next("down").value -> 16
fontGenerator.next("down").value -> 14
fontGenerator.next("down").value -> 12
fontGenerator.next().value -> 12
*/