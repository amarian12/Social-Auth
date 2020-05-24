const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const db = require('./config/database');
const dotenv = require('dotenv');
const PORT = 8080;

const app = express();

dotenv.config();

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.render('home');
});

db.connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening to requests on port ${PORT}.`);
            console.log('MongoDB connected.');
        })
    })
