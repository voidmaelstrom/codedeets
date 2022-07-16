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
        }
        res.status(200).json(result.rows)
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
        }
        res.status(200).json(result.rows)
    })
    client.end;
})

// create a post
posts.post('/', upload.single('markdown'), async (req, res) => {
    //const name = req.body.name
    const file = req.body.file
    console.log(req.files, req.body)
    const tag = req.body.tag
    let sql = 'INSERT INTO posts(post_id, file, tag) VALUES(DEFAULT, $1, $2)'
    client.query(sql, [file, tag], (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        res.status(200).json({
            message: 'Successfully created post'
        })
    })
    client.end;
})

// edit a post
posts.put('/:id', async (req, res) => {
  const id = req.params.id
  const name = req.body.name
  const file = req.body.file
  const tag = req.body.tag
  let sql = "UPDATE posts SET name = $1, file = $2, tag = $3 WHERE post_id = $5"
  client.query(sql, [name, file, tag, id], (err, result) => {
      if (err) {
          return console.error(err.message);
      }
      res.status(202).json({
        message: 'Post successfully updated'
      })
  })
  client.end;
})

// delete a post
posts.delete('/:id', async (req, res) => {
  id = req.params.id
  let sql = "DELETE FROM post WHERE post_id = $1"
  client.query(sql, [id], (err, result) => {
      if (err) {
          return console.error(err.message);
      }
      res.status(200).json({
        message: 'Post successfully deleted'
      })
  })
  client.end;
})

module.exports = posts