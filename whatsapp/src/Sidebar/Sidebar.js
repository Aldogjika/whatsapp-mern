import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import IconButton from "@material-ui/core/IconButton";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  const [sidebarChat, setSidebarChat] = useState([
    {
      id: 1,
      avatarSrc: "http://aldogjika.de/images/aldo.png",
      name: "Room name 1",
      message: "This is the last message",
    },
    {
      id: 2,
      avatarSrc: "/static/images/avatar/1.jpg",
      name: "Room name 2",
      message: "This is the last message",
    },
  ]);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar alt="Aldo Gjika" src="/static/images/avatar/1.jpg" />

        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />

          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        {sidebarChat?.map((item) => (
          <SidebarChat
            key={item.id}
            avatarSrc={item.avatarSrc}
            name={item.name}
            message={item.message}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
