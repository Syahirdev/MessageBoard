const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
	username: Joi.string().alphanum().required(),
	subject: Joi.string().required(),
	message: Joi.string().max(500).required(),
	imageURL: Joi.string().uri({
		scheme: [/http?/],
	}),
});

const messages = db.get('messages');

function getAll() {
	console.log('inside getAll function');
	return messages.find();
}

function create(message) {
	const result = new Joi.ValidationError(message, schema);
	if (result.error == null) {
		message.created = new Date();
		return messages.insert(message);
	} else {
		return Promise.reject(result.error);
	}
}

module.exports = {
	getAll,
	create,
};
