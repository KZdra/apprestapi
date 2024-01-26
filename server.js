const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/ res.json();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//connect routes`
var routes = require('./routes');
routes(app);
 app.listen(3000, ()=> {
    console.log('ini server ')
 });