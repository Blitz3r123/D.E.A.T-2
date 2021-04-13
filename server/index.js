var mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({extended: true})
);

app.get('/create/test/:testname', (req, res, next) => {
    console.log(req.params.testname);
});

app.listen(port, () => {
    console.log('Server listening at localhost:' + port);
});

var con = mysql.createConnection({
    host: 'smcse-stuproj00.city.ac.uk',
    user: 'deat',
    password: 'y2mPH2ZhCX',
    database: 'deat2'
});