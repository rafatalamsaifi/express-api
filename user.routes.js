
let users = require('./users')

const express = require('express');

const router = express.Router();
const controller = require('./user.controller')

router.get('/', controller.getAllUsers)

router.get('/:id', controller.getUserById)

router.post('/', (req, res) => {

    let data = {
        id: users.length + 1,
        name: req.body.name,
    }

    users.push(data);

    return res.json(data);
})

router.delete('/:id', (req, res) => {

    users = users.filter(user => user.id != req.params.id)

    return res.json({ message: 'User deleted' });
})



module.exports = router;