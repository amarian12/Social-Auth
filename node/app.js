const express = require('express');
const PORT = 8080;

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log(`Server listening to requests on port ${PORT}`);
})
