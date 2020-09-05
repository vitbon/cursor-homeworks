import React, {Component} from "react";

// { avatar: '...', cover: '...', name: '...', time: 10 }
const Story = (props) => (
    <div className="story" style={{backgroundImage: `url(${props.cover})`}}>
        <div className="story-overlay"/>
        <div className="story-avatar"
             style={{backgroundImage: `url(${props.avatar})`}}/>
        <div className="story-name">
            {props.name}
        </div>
    </div>
)

export default Story;