const express = require('express');
const router = express.Router();
const User = require('../model/user');
const Todo = require('../model/todo');

router.post('/', (req, res) => {
	new ToDo({
		todo: req.body.todo,
		when: req.body.when,
		user_id: req.body.userId
	})
		.save()
		.then(newTodo => {
			res.status(201).json(newTodo);
		});
});

module.exports = router;