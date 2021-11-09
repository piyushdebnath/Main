const express = require('express') 
const app = express() 
const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({ extended: false }));

// Route to Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

// Route to Login Page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/static/login.html');
});

app.post('/login', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  if (username=='Piyush' && password=='Piyush123'){
    res.send('Valid credentials')
  } else {
    res.send('Invalid credentials')
  }
});

const port = 3000 

app.listen(port, () => console.log(`This app is listening on port ${port}`));