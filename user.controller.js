let users = require('./users')


module.exports.getAllUsers = (req, res) => {
    return res.json(users)
}

module.exports.getUserById = (req, res) => {

    const user = users.find((u) => u.id == req.params.id)
    if (!user) {
        return res.status(404).json({ error: 'Not found' })
    }
    return res.json({ user })
}