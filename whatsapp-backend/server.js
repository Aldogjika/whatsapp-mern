// importing
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Messages from "./dbMessages.js";
import Pusher from "pusher";

// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1141827",
  key: "53d9210ceed65cdf8d28",
  secret: "77feaf8c7441e5f3a102",
  cluster: "eu",
  useTLS: true,
});

// middleware
app.use(cors());
app.use(express.json());

// DB config
const connection_url = `mongodb+srv://admin:admin@cluster0.y3qiu.mongodb.net/whatsappdb?retryWrites=true&w=majority`;

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");

  const msgCollection = db.collection("messagecontents");

  msgCollection.watch().on("change", (change) => {
    console.log(change);

    if (change.operationType === "insert") {
      const msgDetails = change.fullDocument;

      pusher.trigger("messages", "inserted", {
        name: msgDetails.name,
        message: msgDetails.message,
        timestamp: msgDetails.timestamp,
        received: msgDetails.received,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

// api routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("api/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post("api/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

// listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
