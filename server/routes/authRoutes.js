const router = require('express').Router();

//auth login
router.get('/login', (req, res) => {

});

router.get('/logout', (req, res) => {
	res.send('logging out');
});

router.get('/google', (req, res) => {

});

module.exports = router;