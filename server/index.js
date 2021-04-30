const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'deat',
    host: 'smcse-stuproj00.city.ac.uk',
    password: 'y2mPH2ZhCX',
    database: 'deat2'
});

// app.put('/update', (req, res) => {
//     const id = req.body.id;
//     const name = req.body.name;

//     res.send({id: id, name: name});

//     // db.query('UPDATE Contact SET Name = ? WHERE ContactID = ?', [name, id], (err, results) => {
//     //     if(err){
//     //         console.log(err);
//     //     }else{
//     //         res.send(results);
//     //     }
//     // });
// });

// app.get('/contacts', (req, res) => {
//     db.query('SELECT * FROM Contact', (err, results) => {
//         if(err){
//             console.log(err);
//         }else{
//             res.send(results);
//         }
//     });
// });

// app.post('/create', (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const telephone = req.body.telephone;

//     db.query('INSERT INTO Contact(Name, Email, Telephone) VALUES(?, ?, ?)', [name, email, telephone], (err, results) => {
//         if(err){
//             console.log(err);
//         }else{
//             res.send('values inserted');
//         }
//     });
// });

app.get('/test/:testid', (req, res) => {
    // Return a single test from database
    db.query('SELECT * FROM Test WHERE TestID = ?', [req.params.testid], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result[0]);
        }
    });
});

app.get('/delete-test/:testid', (req, res) => {
    // Delete the test from the database
    db.query('DELETE FROM Test WHERE TestID = ?', [req.params.testid], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.get('/tests', (req, res) => {
    /*
        Return list of tests from database.
    */

    db.query('SELECT * FROM Test', (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.post('/create/test', (req, res) => {
    console.log(req.body.testname);
    /*
        1. Check if testname already exists in the database
            1.1. If it does then send response with message
            1.2. If not then insert into database
    */

    // 1. Check if testname already exists in the database
    let nameQuery = "SELECT * FROM Test WHERE TestName = ?";
    let testname = req.body.testname;
    db.query(nameQuery, [testname], (err, results) => {
        if(err){
            console.log(err);
        }else{
            if(results.length >= 1){
                // 1.1. Test name already exists - send message back
                res.send({type: 'error', message: 'Test already exists with that name....'});
            }else{
                // 1.2. Test name doesn't exist in database - insert it

                let createdAt = new Date().toISOString().slice(0, 10);

                db.query(`INSERT INTO Test(TestName, CreatedAt) VALUES(?, ?)`, [testname, createdAt], (err, results) => {
                    if(err){
                        console.log(err);
                    }else{
                        res.send({type: 'success', TestID: results.insertId});
                    }
                });

            }
        }
    });
});

app.listen(4000, () => {
    console.log('running on localhost:4000')
});