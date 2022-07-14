const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const app = express()
const {client} = require('./models/middleware')

client.connect();

require('dotenv').config();
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// Setup base route for message return
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the codedeets API!'
    })
})

// Connect controllers for endpoints
const usersController = require('./controllers/user_controller')
const postsController = require('./controllers/post_controller')

app.use('/user', usersController)
app.use('/posts', postsController)

// start listening on server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running... on port ${process.env.PORT}`);
})
