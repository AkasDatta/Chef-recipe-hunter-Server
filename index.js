const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Dragon is running')
})

app.get('/categories', (req, res) => {
    // console.log(categories)
    res.send(categories)
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedCatagories = categories.find(n => n.id === id);
    res.send(selectedCatagories);
})


app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})