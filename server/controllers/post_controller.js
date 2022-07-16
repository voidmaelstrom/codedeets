const posts = require('express').Router();
const multer = require('multer')
const upload = multer({dest: './client/public/assets'})

const {client} = require('../models/middleware')

// get all posts
posts.get('/', async (req, res) => {
    let sql = "SELECT * FROM posts ORDER BY post_id"
    client.query(sql, [], (err, result) => {
        if (err) {
            return console.error(err.message);
        } else {
            res.status(200).json(result.rows)
        }
    })
    client.end;
})

// get a specific post
posts.get('/:id', async (req, res) => {
    const id = req.params.id;
    let sql = "SELECT * FROM posts WHERE post_id = $1";
    client.query(sql, [id], (err, result) => {
        if (err) {
            return console.error(err.message);
        } else {
            res.status(200).json(result.rows)
        }
    })
    client.end;
})

// create a post
posts.post('/', async (req, res) => {
    const file = req.body.file
    console.log(req.files, req.body)
    const tag = req.body.tag
    const user_id = req.body.user_id
    let sql = 'INSERT INTO posts(post_id, file, tag, user_id) VALUES(DEFAULT, $1, $2, $3)'
    client.query(sql, [file, tag, user_id], (err, result) => {
        if (err) {
            return console.error(err.message);
        } else {
            res.status(200).json({
                message: 'Successfully created post'
            })
        }
    })
    client.end;
})

// update a post
posts.put('/:id', async (req, res) => {
  const post_id = req.params.id
  const file = req.body.file
  const tag = req.body.tag
  const user_id = req.body.user_id
  let sql = "UPDATE posts SET file = $1, tag = $2, user_id = $3 WHERE post_id = $4"
  client.query(sql, [file, tag, user_id, post_id], (err, result) => {
      if (err) {
          return console.error(err.message);
      } else {
        res.status(202).json({
            message: 'Post successfully updated'
          })
      }
  })
  client.end;
})

// delete a post
posts.delete('/:id', async (req, res) => {
  id = req.params.id
  let sql = "DELETE FROM posts WHERE post_id = $1"
  client.query(sql, [id], (err, result) => {
      if (err) {
          return console.error(err.message);
      } else {
        res.status(200).json({
            message: 'Post successfully deleted'
          })
      }
  })
  client.end;
})

module.exports = posts