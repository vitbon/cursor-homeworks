import React from 'react';
import './App.css';
import {pData, Post} from './component/template.js';
import './component/template.css';



function App() {
  return (
    <div className="App">
      { pData.map(post => <Post {...post} /> )}
      <Post />
    </div>
  );
}

export default App;

/*
Завдання Basic:
Вам необхідно створити функціональний компонент, який можна використовувати для відображення публікації (як у твітері або фейсбуці).
Приклад використання компоненту:

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

<Post author={{
            name: "Anakin skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader"
         }}
         content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
         image={RAY_IMAGE}
         date={"26 февр."}
/>
                    
Приклад дизайну. Не обов'язково робити саме так і з такими іконками – це для загального розуміння.
Але гарні стилі дуже дуууже рекомендуються :)
Посилання на зображення вище у прикладі виклику як константи.
Галочки та іконки лайку/шерингу/коментів/репостів потрібно опустити, а можна і покреативити.
*/