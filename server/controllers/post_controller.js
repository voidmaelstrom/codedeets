const express = require('express')
const posts = require('express').Router();
const path = require('path')
const jwt = require('json-web-token')

// multer configuration
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({
    storage: storage
});

const bodyParser = require('body-parser')
const {client} = require('../models/middleware');

// use stuff
posts.use(bodyParser.json())
posts.use(bodyParser.urlencoded({ extended: true }))
posts.use('../client/public/assets', express.static('assets'))

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

// upload file to specific post
posts.put('/:id/uploadFile', upload.any(), (req, res, next) => {
    const post_id = req.params.id
    const file = Uint8Array.from(req.files[0].buffer)
    console.log('Multer output', req.files)
    console.log(req.files[0].path)
    if (!file) {
        return res.status(400).send({ message: 'Please upload a file.' });
    }
    let sql = "UPDATE posts SET file = $1 WHERE post_id = $2"
    client.query(sql, [file, post_id], (err, result) => {
        if (err) {
            return console.error('Upload file request error:', err.message);
        } else {
            return res.send({ message: 'File is successfully uploaded.', file });
        }
    });
})

// create a post
posts.post('/', upload.any(), async (req, res, next) => {

    let currentUser;
    try {
        const [method, token] = req.headers.authorization.split(' ')
        if (method == 'Bearer') {
            const result = await jwt.decode(process.env.JWT_SECRET, token)
            const { id } = result.value
            let sql = "SELECT * FROM public.user WHERE user_id = $1";
            currentUser = client.query(sql, [id], (err, result) => {
                if (err) {
                    return console.error(err.message);
                } else {
                    res.status(200).json(result.rows)
                }
            })
            client.end;
        }
    } catch {
        currentUser = null
    }

    if (!currentUser) {
        return res.status(404).json({
            message: 'You must be logged in to write a blog.'
        })
    }

    console.log('Multer output', req.files)

    const file = Uint8Array.from(req.files[0].buffer)
    const tag = req.body.tag
    // const userId = req.body.user_id
    const userId = currentUser.user_id
    let sql = 'INSERT INTO posts(post_id, file, tag, user_id) VALUES(DEFAULT, $1, $2, $3)'
    client.query(sql, [file, tag, userId], (err, result) => {
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