
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    useremail = String("") ;  
    userpassword = String("");
    loginDetails = {
      email: "test@test.com",
      password: "password"
    }
  



  constructor( private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  checkDetails(email: string, password: string) {
    email = this.loginDetails.email;
    password = this.loginDetails.password;
    if(this.useremail == email && this.userpassword == password){
      this.navby(); 
    } else {
      alert("Incorrect Details are entered"); 
    }
    return true; 
  }
  navby() {
    this.router.navigate(['/account/']); 
  }
}
