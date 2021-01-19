import React from "react";
import "./SidebarChat.css";
import Avatar from "@material-ui/core/Avatar";

function SidebarChat(props) {
  return (
    <div className="sidebarChat">
      <Avatar alt="Aldo Gjika" src={props.avatarSrc} />

      <div className="sidebarChat__info">
        <h2>{props.name}</h2>
        <p>{props.message}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
