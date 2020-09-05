import React from 'react';

const pData = [
  { 
    author: {
      name: "Anakin Skywalker",
      photo: "./img/skywalker-ava.jpg",
      nickname: "@anakin-batya",
      date: "26 mar."
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: "./img/sw9_ReySabre-laser.jpg",
    footer: {
      message: 482,
      reTweet: 146,
      like: 887
    }
  },
  { 
    author: {
      name: "Anakin Skywalker",
      photo: "./img/sheevPalpatine-ava.jpg",
      nickname: "@sheva-imperator",
      date: "03 dec."
    },
    content: "That woman could turn any Ewok into a Wookie.", 
    image: "./img/sw9_PadmeAmidala-pictol.jpg",
    footer: {
      message: 321,
      reTweet: 97,
      like: 784
    }
  },
  { 
    author: {
      name: "Anakin Skywalker",
      photo: "./img/skywalker-ava.jpg",
      nickname: "@anakin-batya",
      date: "26 mar."
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: "./img/sw9_ReySabre-laser.jpg",
    footer: {
      message: 321,
      reTweet: 97,
      like: 784
    }
  }
];

const Post = (props) => {
  return (
    <div className="card">

      <div className="card__header">
        <span className="card__header_avatar">
          <img src={props.author.photo} />
        </span>
        <span className="card__header__textBox">
          <div className="card__header__textBox_name">
            <span className="bold">{props.author.name}</span>
            <img src='./img/star-active.png' className="star-active" />            
            <span className="gray">{props.author.nickname} • {props.author.date}</span>
          </div>       
          <div className="card__header__textBox_status">
            <span>{props.content}</span>
          </div>          
        </span>
        <span className="card__header__textBox_dw_Arrow"><img src="./img/down-arrow.png" width="14px"/></span>
      </div>

      <div className="card__center">
        <img src={props.image} />
      </div>

      <div className="card__footer">
      <span>
  <a src=""><img src="./img/tw-message.png"/><span className="icon2text">{props.message}</span></a>
      </span>
      <span class="leftTab">
        <a src=""><img src="./img/tw-retweet.png"/><span className="icon2text">{props.reTweet}</span></a>
      </span>
      <span class="leftTab">
        <a src=""><img src="./img/tw-like.png" /><span className="icon2text">{props.like}</span></a>
      </span>
      <span class="leftTab">
        <a src=""><img src="./img/tw-share.png" /></a>
      </span>
      </div>
    </div>
  )
}

export {pData, Post};