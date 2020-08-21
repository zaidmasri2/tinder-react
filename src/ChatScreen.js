import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Emily",
      image:
        "https://thumbs.dreamstime.com/b/cute-girl-avatar-icon-young-woman-glasses-pretty-lady-portrait-cartoon-illustration-beautiful-brunette-76317721.jpg",
      message: "What's up",
    },
    {
      name: "Emily",
      image:
        "https://thumbs.dreamstime.com/b/cute-girl-avatar-icon-young-woman-glasses-pretty-lady-portrait-cartoon-illustration-beautiful-brunette-76317721.jpg",
      message: "I think i've seen you before",
    },
    {
      message: "Yeah I think we met at Bob's birthday party last week",
    },
  ]);

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
    </div>
  );
}

export default ChatScreen;
