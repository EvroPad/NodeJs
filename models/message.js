const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = mongoose.Schema({
  senderId: {type: Schema.Types.ObjectId, ref: 'User'},
  receiverId: {type: Schema.Types.ObjectId, ref: 'User'},
  message: String
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
