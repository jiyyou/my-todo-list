const express = require('express');
const router = express.Router();
const User = require('../model/user');
const Todo = require('../model/todo');

router.get('/:id', (req, res) => {
	User.where('id', req.params.id)
		.fetchAll({ withRelated: ['todo']})
		.then(user => {
			res.status(201).json(user);
		});
});

router.post('/:id', (req, res) => {
	new User({
		fName: req.body.fName,
		lName: req.body.lName,
		googleId: req.body.googleId
	})
		.save()
		.then(newUser => {
			res.status(201).json(newUser);
		});
});

module.exports = router;