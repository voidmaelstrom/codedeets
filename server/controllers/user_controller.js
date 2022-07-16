const user = require('express').Router();
const {client} = require('../models/middleware')

// get all users
user.get('/', async (req, res) => {
    let sql = "SELECT * FROM public.user ORDER BY user_id"
    client.query(sql, [], (err, result) => {
        if (err) {
            return console.error(err.message);
        } else {
            res.status(200).json(result.rows)
        }
    })
    client.end;
})

// get a specific user
user.get('/:id', async (req, res) => {
  const id = req.params.id;
  let sql = "SELECT * FROM public.user WHERE user_id = $1";
  client.query(sql, [id], (err, result) => {
      if (err) {
          return console.error(err.message);
      } else {
        res.status(200).json(result.rows)
      }
  })
  client.end;
})

// create a user
user.post('/', async (req, res) => {
  const name = req.body.name
  const bio = req.body.bio
  const email = req.body.email
  const github = req.body.github
  const linkedin = req.body.linkedin
  const password = req.body.password
  const website = req.body.website
  const role = req.body.role
  let sql = 'INSERT INTO public.user(user_id, name, bio, email, github, linkedin, password, website, role) VALUES(DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8)'
  client.query(sql, [name, bio, email, github, linkedin, password, website, role], (err, result) => {
      if (err) {
          return console.error(err.message);
      } else {
        res.status(200).json({
            message: 'Successfully created user'
        })
      }
  })
  client.end;
})

// update a user
user.put('/:id', async (req, res) => {
    const user_id = req.params.id
    const name = req.body.name
    const bio = req.body.bio
    const email = req.body.email
    const github = req.body.github
    const linkedin = req.body.linkedin
    const password = req.body.password
    const website = req.body.website
    const role = req.body.role
    let sql = 'UPDATE public.user SET name = $1, bio = $2, email = $3, github = $4, linkedin = $5, password = $6, website = $7, role = $8 WHERE user_id = $9'
    client.query(sql, [name, bio, email, github, linkedin, password, website, role, user_id], (err, result) => {
        if (err) {
            return console.error(err.message);
        } else {
          res.status(200).json({
              message: 'Successfully updated user'
          })
        }
    })
    client.end;
  })

// delete a user
user.delete('/:id', async (req, res) => {
  id = req.params.id
  let sql = "DELETE FROM public.user WHERE user_id = $1"
  client.query(sql, [id], (err, result) => {
      if (err) {
          return console.error(err.message);
      } else {
        res.status(200).json({
            message: 'User successfully deleted'
          })
      }
  })
  client.end;
})

module.exports = user