const auth = require('express').Router()
const bcrypt = require('bcrypt')
const {client} = require('../models/middleware')
const jwt = require('json-web-token')

auth.post('/', async (req, res) => {
    
    const email = req.body.email;
    let sql = "SELECT * FROM public.user WHERE email = $1";
    let user = await client.query(sql, [email])

    user = user.rows[0]
    //console.log(user.password)

    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        res.status(404).json({
            message: 'Could not find a user with the provided username and password'
        })
        return
    } else {
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user.user_id })
        res.json({ user: user, token: result.value })
        return
    }
})

auth.get('/profile', async (req,res) => {
    res.json(req.currentUser)
})
client.end;
module.exports = auth