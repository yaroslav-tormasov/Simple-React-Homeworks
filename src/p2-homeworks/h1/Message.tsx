import React from "react";
import s from "./Message.module.css";
import {messageType} from "./HW1";

function Message(props: messageType) {
    return (
        <div className={s.Message}>
            <img className={s.avatar} src={props.avatar} alt="avatar"/>
            <div className={s.MessageWindow}>
                <h4>{props.name}</h4>
                <p>{props.message}</p>
                <time>{props.time}</time>
            </div>
        </div>
    );
}

export default Message;
