import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Yo what's up!"
        timestamp="40 seconds ago"
        profilePic=""
      />
    </div>
  );
}

export default Chats;
