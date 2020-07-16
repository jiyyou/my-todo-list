const express = require('express');
const session = require('express-session');
const app = express();
const cors = require('cors');
const passport = require('passport');
const mysql = require('mysql');
const knex = require('./knexfile');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const passportSetup = require('./config/passportSetup');

app.use(cors());
app.use(express.json());

app.use(passport.initialize());

//set up routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(8080, () => console.log("Listening on port 8080.."));