const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('PorTech Edu Server is Running');
})
app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(courses);
    } else {
        const category_course = courses.filter(ct => ct.category_id === id);
        res.send(category_course);
    }

})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const courseItem = courses.find(n => n._id === id);
    res.send(courseItem);
})

app.listen(port, () => {
    console.log(`ProTech Edu Server Running ${port}`)
})