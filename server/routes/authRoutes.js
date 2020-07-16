const express = require('express');
const router = require('express').Router();
const passport = require('passport');

//logout
router.get('/logout', (req, res) => {
	req.logout();
});

router.get('/google', passport.authenticate('google', {
	scope: ['profile']
}));

//check auth
router.get('/check-auth', (req, res) => {
	if (req.user === undefined) return res.status(401).send('Unauthorized');
	res.status(200).json(req.user);
})

//callback route for google to redirect to
router.get('/redirect', passport.authenticate('google'), (req, res) => {
	res.redirect('http://localhost:3000');
});

module.exports = router;