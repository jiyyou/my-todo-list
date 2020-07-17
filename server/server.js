const express = require('express');
const session = require('express-session');
const app = express();
const cors = require('cors');
const passport = require('passport');
const mysql = require('mysql');
const knex = require('./knexfile');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const toDoRoutes = require('./routes/toDoRoutes');
const passportSetup = require('./config/passportSetup');

require('dotenv').config();
const PORT = process.env.PORT || 8080;
const SESSION_SECRET = process.env.SESSION_SECRET;

app.use(cors({
	origin: true,
	credentials: true
}));
app.use(express.json());

app.use(
	session({
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: true
	})
);
app.use(passport.initialize());
app.use(passport.session());

//set up routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/todo', toDoRoutes);

let connection;
if (process.env.JAWSDB_URL) {
	// connection = mysql.createConnection(process.env.JAWSDB_URL);
	connection = mysql.createConnection(knex.production);
} else {
	connection = mysql.createConnection(knex.development);
}

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('../client/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
	})
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}..`));