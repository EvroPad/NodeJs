function Repository() {}

Repository.prototype.getAll = getAll;
Repository.prototype.getById = getById;
Repository.prototype.deleteById = deleteById;
Repository.prototype.updateById = updateById;


function getAll(callback) {
  const model = this.model;
  const query = model.find();

  query.exec(callback);
}

function getById(id, callback) {
  const model = this.model;
  const query = model.findOne({
    _id: id
  });

  query.exec(callback);
}

function deleteById(id, callback) {
	const model = this.model;
  const query = model.findByIdAndDelete({ _id: id } );

	query.exec(callback);
}

function updateById(data, callback) {
  const { id, ...body } = data;
  const model = this.model;
  const query = model.findOneAndUpdate({_id:id}, body);
	query.exec(callback);
}

module.exports = Repository;
