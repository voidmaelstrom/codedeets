var pg = require('pg');
require('dotenv').config();

var conString = process.env.config
var client = new pg.Client(conString);

module.exports={client};