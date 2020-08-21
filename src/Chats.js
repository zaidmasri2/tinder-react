import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sara"
        message="Yo what's up!"
        timestamp="40 seconds ago"
        profilePic="https://image.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg"
      />
      <Chat
        name="Emily"
        message="No way."
        timestamp="2 Hours Ago"
        profilePic="https://thumbs.dreamstime.com/b/cute-girl-avatar-icon-young-woman-glasses-pretty-lady-portrait-cartoon-illustration-beautiful-brunette-76317721.jpg"
      />
      <Chat
        name="Lex"
        message="See you then"
        timestamp="7 hours ago"
        profilePic="https://thumbs.dreamstime.com/b/girl-lovely-avatar-icon-blonde-hair-cartoon-91929591.jpg"
      />
    </div>
  );
}

export default Chats;
