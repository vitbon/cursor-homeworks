import React from 'react';

const Post = (props) => {
  return (
    <div className="card">

      <div className="card__header">
        <span className="card__header_avatar">
          <img src={props.photo} />
        </span>
        <span className="card__header__textBox">
          <div className="card__header__textBox_name">
            <span className="bold">{props.name}</span>
            <img src='./img/star-active.png' className="star-active" />            
            <span className="gray"><a>{props.nickname}</a> • {props.date}</span> 
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

export default Post;