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
const port = process.env.PORT;
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

app.listen(8080, () => console.log("Listening on port 8080.."));