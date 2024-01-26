var mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_rapi'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('my sql connected')
});


module.exports = conn;