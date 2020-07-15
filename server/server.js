const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());

//set up routes
app.use('/auth', authRoutes);

app.listen(8080, () => console.log("Listening on port 8080.."));