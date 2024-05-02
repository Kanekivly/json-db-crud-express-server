const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs');

/*
 build express server 
 after we also put middleware 
 import routes 
 then start server
*/
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./D-urls/URLpaths')
app.use('/', routes)


app.listen(8000, ()=>{
    console.log("server has started to port:8000")
}) 