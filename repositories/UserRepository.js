const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const User = require("../models/user");

function UserRepository() {
  Repository.prototype.constructor.call(this);
  this.model = User;
}

UserRepository.prototype = new Repository();

UserRepository.prototype.setNewUser = setNewUser;

function setNewUser(userData, callback) {
  const model = this.model;
  const query = new model(userData);

  query.save(callback);
}

module.exports = new UserRepository();
