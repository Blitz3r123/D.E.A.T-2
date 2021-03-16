var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'deat'
});

con.connect(err => {
    if (err) throw err;
    console.log('conected');

    con.query('select * from test', (err, results) => {
        if(err) console.log(err);
        results.forEach(result => {
            console.log(result);
        });
    });

});