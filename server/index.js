// dependencies
// npm install express, body-parser, mysql, nodemon

//npm run devStart

//express server
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors');

//accessing mysql
const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'gameWithFriends'
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req, res) => {
//     //test sql
//     // const sqlInsert = "INSERT INTO games (gameName, gameGenre) VALUES ('Valorant', 'FPS');"
//     // db.query(sqlInsert, (err, result) => {
//     //     res.send("hello world");
//     // })
    
// })

app.post("/signup/insert", (req, res)=> {

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const birthdate = req.body.birthdate;
    
    const sqlInsert = "INSERT INTO user (username, password, email, dateOfBirth) VALUES (?, ?, ?, ?);"
    db.query(sqlInsert, [username, password, email, birthdate], (err, result)=> {
        console.log(err);
    })
});

//npm install cors

//check login
app.post('/login', (req, res)=> {

    const username = req.body.username;
    const password = req.body.password;
    
    const sqlSelect = "SELECT * FROM user WHERE username = ? AND password = ?;"
    db.query(sqlSelect, [username, password], (err, result)=> {
        if(err){
            res.send({err: err});
        } 
        //if result exits, there is a user
        if(result.length > 0) {
            res.send(result);
        } else {
            res.send({message: "Wrong username/password"});
        }
        
    })
})

app.listen(3001, () => {
    console.log('running on port 3001');
})