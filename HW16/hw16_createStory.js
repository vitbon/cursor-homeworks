import React, {Component} from "react";

export const CreateStory = (props) => (
    <div className="story story__create" style={{backgroundImage: `url(${props.avatar})`}}>
        <div className="add-history">
            <div className="add-history-btn" onClick={props.addStory}>
                +
            </div>
            <span className="story-name story__name__create">
                        Создать <br/>
                        историю
                            </span>
        </div>
    </div>
)
