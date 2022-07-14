const user = require('express').Router();
const {client} = require('../models/middleware')

client.connect();

// get all users
user.get('/', async (req, res) => {
    let sql = "SELECT * FROM user ORDER BY user_id"
    client.query(sql, [], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.status(200).json(result.rows)
    })
    client.end;
})

// get a specific user
user.get('/:id', async (req, res) => {
  const id = req.params.id;
  let sql = "SELECT * FROM user WHERE user_id = $1";
  client.query(sql, [id], (err, result) => {
      if (err) {
          return console.error(err.message);
      }
      res.status(200).json(result.rows)
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
  const posts = req.body.posts
  const password = req.body.password
  const role = req.body.role
  const website = req.body.website
  let sql = 'INSERT INTO user(user_id, name, bio, email, github, linkedin, posts, password, role, website) VALUES(DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9)'
  client.query(sql, [name, bio, email, github, linkedin, posts, password, role, website], (err, result) => {
      if (err) {
          return console.error(err.message);
      }
      res.status(200).json({
          message: 'Successfully created user'
      })
  })
  client.end;
})

// delete a user
user.delete('/:id', async (req, res) => {
  id = req.params.id
  let sql = "DELETE FROM user WHERE user_id = $1"
  client.query(sql, [id], (err, result) => {
      if (err) {
          return console.error(err.message);
      }
      res.status(200).json({
        message: 'User successfully deleted'
      })
  })
  client.end;
})

module.exports = user