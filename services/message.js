const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
  findAll: callback => {
    MessageRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  addUser: (messageData, callback) => {
    MessageRepository.setNewMessage(messageData, (err, data) => {
      callback(err, data);
    });
  },

  deleteUser: (id, callback) => {
    MessageRepository.deleteById(id, (err, data) => {
      callback(err, data);
    });
  },

  updateUser: (data, callback) => {
    MessageRepository.updateById(data, (err, data) => {
      callback(err, data);
    });
  },

  getAllReceiverId: (id, callback) => {
    MessageRepository.getAllReceiverId(id, (err, data) => {
      callback(err, data);
    });
  }
};
