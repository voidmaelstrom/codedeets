const jwt = require('json-web-token')

async function defineCurrentUser(req, res, next){
    try {
        const [ method, token ] = req.headers.authorization.split(' ')
        if(method == 'Bearer'){
            const result = await jwt.decode(process.env.JWT_SECRET, token)
            const { id } = result.value
            let sql = "SELECT * FROM public.user WHERE user_id = $1";
            let user = await client.query(sql, [id], (err, result) => {
                if (err) {
                    return console.error(err.message);
                } else {
                    res.status(200).json(result.rows)
                }
            })
            client.end;
            req.currentUser = user
        }
        next()
    } catch(err){
        req.currentUser = null
        next() 
    }
}

module.exports = defineCurrentUser
