import React from "react";
import Message from "./Message";

export type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData: messageType = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Yaroslav",
    message: "npm start нажимал?",
    time: "20:00",
};


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            <Message
               avatar={messageData.avatar}
               name={messageData.name}
               message={messageData.message}
               time={messageData.time}
               />
        </div>
    );
}

export default HW1;
