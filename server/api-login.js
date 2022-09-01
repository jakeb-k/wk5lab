module.exports = {
    route:   (app)=> {

        app.post('/api/login', function(req,res){
            let users = [{'email': 'test@test.com', 'password': 'test'}];

            if (!req.body) {
                return res.sendStatus(400)
            }
            let customer = { };
            customer.email = req.body.email;
            customer.password = req.body.password; 
            customer.valid = false; 
            for(let i = 0; i < users.length; i++) {
                if(req.body.email = users[i].email && req.body.password == users[i].password){
                    customer.valid = true;
                }
            }
                res.send(customer); 
        });
    }
}