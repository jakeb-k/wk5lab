var express = require('express'); 
var app = express(); 
var http = require('http').Server(app); 
var cors = require('cors');
app.use(cors()); 
var bodyParser = require('body-parser'); 
let server = http.listen(3000, function () {
let host = server.address().address;
let port = server.address().port;
console.log("My First NodeJs Server!");
console.log("Server listening on: " + host + " port: " + port);
});

app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('C:/Users/jknow/OneDrive/Desktop/Year_4/TRI_2/3813ICT-Software_Frameworks/w5/wkshop/week4tut/dist/week4tut'));

app.use(express.json())
 


class User {
    constructor(username, birthdate, age, email, password, valid){
        this.username = String("");
        this.birthdate = String("");
        this.age = Number(); 
        this.email = String("");
        this.password = String("");
        this.valid = Boolean(false); 
    }
}
let users = [
       user1 = new User("test1", "30/09/01", 20, "test1@test.com", "testing"),
       user2 = new User("test2", "30/09/01", 20, "test2@test.com", "testing"),
       user3 = new User("test3", "30/09/01", 20, "test3@test.com", "testing")
        
    ]; 
    
app.post('/api/auth', function(req,res){
    console.log(req.body);  
    if(!req.body) {
        console.log("is hitting server file"); 
        return res.sendStatus(400)
    } 
    if(req.body.email == "test" && req.body.password == "test"){
       console.log("working"); 
    } else {
         //console.log(userDetails)
    }
    //console.log(userDetails)
});

