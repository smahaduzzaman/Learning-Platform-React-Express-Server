const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const categories = require('./data/categories.json');
const tutorials = require('./data/tutorials.json');

app.get('/', (req, res) => {
    res.send('ProTech Edu Server is Running');
})
app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/tutorials', (req, res) => {
    res.send(tutorials);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(courses);
    } else {
        const course = courses.filter(ct => ct.courses === id);
        res.send(course);
    }
})

app.get('/tutorials/:id', (req, res) => {
    const id = req.params.id;
    const tutorial = tutorials.find(n => n._id == id);
    res.send(tutorial);
})

app.listen(port, () => {
    console.log(`ProTech Edu Server is Running: ${port}`)
})