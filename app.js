const { response } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./user.routes');


app.use(express.json())

app.get('/', (req, res) => {

    return res.json({ message: "Welcome" });
});

app.get('/hello', (req, res) => {
    return res.json({ message: 'Hllow' });
})

app.use('/users',userRoutes)

app.get('/:idx', (req, res) => {
    return res.json({ id: req.params.idx });
})

app.get('/:idx/:something', (req, res) => {
    return res.json({ id: req.params.idx, something: req.params.something });
})



app.listen(PORT, () => {
    console.log("API is listening on port " + PORT)
})