'use strict';
const userModel = require ('../models/userModel');

const users = userModel.users;

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

const user_get = async (req, res) => {
    console.log('user id parameter', req.params);
    const user = await userModel.getUser(req.params.id);
	delete user.passwd;
    res.json(user);
};

const user_post = async (req, res) => {
    console.log('user_post', req.body);
		try {
			const user = await userModel.insertUser(req.body);
			console.log('inserted', user);
			res.send(`added user: ${user.insertId}`);
		} catch (e) {
			console.error('problem with user_post in userController', e);
		res.status(500).send(`database insert error: $(e.message}`);
		}
};

const user_put = async (req, res) => {
	console.log('user_put', req.body);
	const upUser = await userModel.updateUser(req.body);
	console.log('user_put result from db', upUser);
	res.status(204).send();
};

const user_delete = async (req, res) => {
	console.log('user_delete', req.params);
	const delUser = await userModel.deleteUser(req.params.id);
	console.log('user_delete result from db', delUser);
	res.json({deleted: 'OK'});
};

module.exports = {
  user_list_get,
  user_get,
  user_post,
  user_put,
  user_delete,
};


// userController