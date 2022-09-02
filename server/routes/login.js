
var fs = require('fs');

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
let user1 = new User("tester", "30/09/01", 20, "test@test.com", "password");
let users = [
       
       user2 = new User("test2", "30/09/01", 20, "test2@test.com", "testing"),
       user3 = new User("test3", "30/09/01", 20, "test3@test.com", "testing")
        
    ]; 
    
module.exports =  function(req,res){
    console.log(req.body.username + " " + req.body.password); 
    console.log(user1.username + " "+ user1.password);
    /*fs.readFile('./data/users.json', function(err, data){
        if (err) throw err;
        let userArray = JSON.parse(data);
        console.log(userArray); 
    });*/ 
    if(req.body.username == "tester" && req.body.password == "password"){
        uArray = []; 
        uArray.push(req.body); 
        data = JSON.stringify(uArray); 
        fs.writeFile('./data/users.json', data, function(err) {
        if(err) throw err;
        let userArray = JSON.parse(data);
        console.log(userArray); 
        res.send(user1.valid = true); 
    }); 
       
    }
   
    if(!req.body) {
        console.log("is hitting server file"); 
        return res.sendStatus(400)
    } 
    
    //console.log(userDetails)
};
