require('dotenv').config()
const express = require('express')
const cors = require ('cors')
// const history = require('connect-history-api-fallback')
const serveStatic = require("serve-static")
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use(cors());
// app.use(history({
//     // OPTIONAL: Includes more verbose logging
//     verbose: true
// }))

// Serve static assets from the build files (images, etc)
app.use(express.static('dist'));
app.use(express.static('static'));
app.use(express.static('assets'));

app.set('secret', 'abcd')
app.use(require('cors')())
app.use(express.json())

app.get('/admin',function(req,res) {
    res.sendFile(__dirname + '/dist/admin.html');
  });

// // Require Database
// require('./plugins/db')(app)
// // Router
// require('./routes/router')(app)
// require('./routes/user-router')(app)


app.listen(port, (req,res) => {
    console.log('app is running on 3000')
})
