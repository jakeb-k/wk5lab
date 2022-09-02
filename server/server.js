var express = require('express'); 
var app = express(); 
var http = require('http').Server(app); 
var cors = require('cors');
app.use(cors()); 
var bodyParser = require('body-parser'); 
let server = http.listen(3000, function () {
let host = server.address().address;
let port = server.address().port;

console.log("Server listening on port 3000, localhost:3000");
});

app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('C:/Users/jknow/OneDrive/Desktop/Year_4/TRI_2/3813ICT-Software_Frameworks/w5/wkshop/week5tut/dist/week4tut'));

app.use(express.json())
 


app.post('/api/auth',require('./routes/login')); 