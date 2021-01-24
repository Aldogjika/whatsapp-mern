import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    axios
      .get("/messages/sync")
      .then(function (response) {
        // handle success
        setAllMessages(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("53d9210ceed65cdf8d28", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      console.log("Pusher Data: ", JSON.stringify(newMessage));

      setAllMessages([...allMessages, newMessage]);

      console.log("All Messages: ", allMessages);
    });

    //Clean up
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [allMessages]);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={allMessages} />
      </div>
    </div>
  );
}

export default App;
