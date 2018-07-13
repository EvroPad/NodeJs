const UserRepository = require("../repositories/UserRepository");

module.exports = {
  findAll: callback => {
    UserRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  addUser: (userData, callback) => {
    UserRepository.setNewUser(userData, (err, data) => {
      callback(err, data);
    });
  },

  deleteUser: (id, callback) => {
    UserRepository.deleteById(id, (err, data) => {
      callback(err, data);
    });
  },

  updateUser: (data, callback) => {
    UserRepository.updateById(data, (err, data) => {
      callback(err, data);
    });
  },
};
