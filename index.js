const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

const port = "3000";

const jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: false }));

//middleware
const verifyAuthToken = (req, res, next) => {
    let auth = req.headers['authorization'];
    if (auth == authToken) {
      next();
    } else {
      res.status(401).json({
        "message": "unauthorized"
      });
    }
  }


app.get("/game", (req, res) => {
    res.render('GAME'); 
});

app.get("/suit", (req, res) => {
    res.render('SUIT'); 
});

app.get("/login", (req, res) => {  
    res.render('login'); 
});

app.post("/login", (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
 
  });