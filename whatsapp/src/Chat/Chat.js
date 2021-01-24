import React, { useState, useEffect } from "react";
import "./Chat.css";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../axios";

function Chat({ messages }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      name: "Aldo",
      message: message,
      timestamp: "Just now!",
      received: false,
    });

    setMessage("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>

          <IconButton>
            <AttachFileIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message chat__reciever">
          <span className="chat__name">Aldo</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        {messages?.map((msg) => (
          <p
            key={msg._id}
            className={`chat__message ${msg.received && "chat__reciever"}`}
          >
            <span className="chat__name">{msg.name}</span>
            <span key={msg._id}>{msg.message}</span>
            <span className="chat__timestamp">{msg.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Send a message
          </button>
        </form>

        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
