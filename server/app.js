const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const app = express()

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

// start listening on server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running... on port ${process.env.PORT}`);
})