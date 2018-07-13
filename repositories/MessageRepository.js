const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Message = require("../models/message");

function MessageRepository() {
  Repository.prototype.constructor.call(this);
  this.model = Message;
}

MessageRepository.prototype = new Repository();

MessageRepository.prototype.setNewMessage = setNewMessage;
MessageRepository.prototype.getAllReceiverId = getAllReceiverId;

function setNewMessage(messageData, callback) {
  const model = this.model;
  const query = new model(messageData);

  query.save(callback);
}

function getAllReceiverId(id, callback) {
  const model = this.model;
  const query = model.findOne( { senderId: id } ).populate('users');

  query.exec(callback);
}

module.exports = new MessageRepository();
