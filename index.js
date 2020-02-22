const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));
app.set('view engine', 'pug')

app.get('index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/get-name', function(req, res) {

    const fullName = req.query.name + " " + req.query.lastname;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const userAge = currentYear - req.query.birthyear;
    res.render('index', { title: 'Your Age', name: fullName, age: userAge })
})

app.listen(port, () => console.log(`Hello. I'm listening on port ${port}!`))