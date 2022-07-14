var pg = require('pg');
require('dotenv').config();

var conString = process.env.CONFIG
var client = new pg.Client(conString);

module.exports={client};