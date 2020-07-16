const router = require('express').Router();

//auth login
router.get('/login', (req, res) => {

});

router.get('/logout', (req, res) => {
	res.send('logging out');
});

router.get('/google', passport.authenticate('google', {
	scope: ['profile']
}));

//callback route for google to redirect to
router.get('/redirect', passport.authenticate('google'), (req, res) => {

});

module.exports = router;