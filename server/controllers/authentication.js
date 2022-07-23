const auth = require('express').Router()
const bcrypt = require('bcrypt')
const {client} = require('../models/middleware')
const jwt = require('json-web-token')

auth.post('/', async (req, res) => {
    
    const name = req.body.name;
    let sql = "SELECT * FROM public.user WHERE name = $1 OR email = $1";
    let user = await client.query(sql, [name])

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
    try{
        // Splitting auth header
        const [authMethod, token] = req.headers.authorization.split(' ')

        // Bearer auth
        if (authMethod == 'Bearer'){
            //Decoding JWT
            const result = await jwt.decode(process.env.JWT_SECRET, token)
            const {id}  = result.value
            //Querying DB for user
            let sql = "SELECT * FROM public.user WHERE user_id = $1";
            client.query(sql, [id], (err, result) => {
                if(err){
                    return console.log(err.message)
                }else{
                    res.status(200).json(result.rows)
                }
            })
        }
    }catch {
        res.json(null)
    }
})
client.end;

module.exports = auth