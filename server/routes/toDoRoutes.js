const express = require('express');
const router = express.Router();
const User = require('../model/user');
const Todo = require('../model/todo');

//create new todo
router.post('/', (req, res) => {
	new Todo({
		todo: req.body.todo,
		user_id: req.body.userId
	})
		.save()
		.then(newTodo => {
			res.status(201).json(newTodo);
		});
});

//change status
router.put('/:id', (req, res) => {
	Todo.where('id', req.params.id)
		.save({
			status: req.body.status
		}, { method: 'update'})
		.then(todo => {
			res.status(200).send(todo)
		})
})

//delete todo
router.delete('/:id', (req, res) => {
	Todo.query()
		.where('id', req.params.id)
		.del()
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err);
		})
})

module.exports = router;