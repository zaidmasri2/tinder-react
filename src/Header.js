import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      <PersonIcon />

      <ForumIcon />
    </div>
  );
}

export default Header;
