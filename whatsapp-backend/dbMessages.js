import mongoose from "mongoose";

const whatsappSchema = new mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

// Collection
const MessagesContent = mongoose.model("messagecontent", whatsappSchema);

export default MessagesContent;
