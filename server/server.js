const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const knex = require('./knexfile');
const authRoutes = require('./routes/authRoutes');
const passportSetup = require('./config/passportSetup');
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());

//set up routes
app.use('/auth', authRoutes);

app.listen(8080, () => console.log("Listening on port 8080.."));