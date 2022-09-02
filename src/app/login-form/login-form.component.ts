
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';




@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    useremail = String("") ;  
    userpassword = String("");
    username = String("");
    userbirthdate = String("");
    userage = Number(); 
    
   

  constructor( private route:ActivatedRoute, private router:Router, private http:HttpClient, private service: LoginServiceService) { }

  ngOnInit(): void {
  }
  userDetails = {
      "username": "",
      "email": "",
      "password":"",
      "age": 0,
      "birthdate": "", 
    }; 
  sendDataFromApi() {
    this.userDetails.email = this.useremail; 
    this.userDetails.password = this.userpassword;
    this.userDetails.username = this.username;
    this.userDetails.age = this.userage;  
    this.userDetails.birthdate = this.userbirthdate; 
    this.service.sendData(this.userDetails).subscribe((response)=>{
      console.log('Reponse from API is ', response)
      if(response == true) {
        this.navby(); 
        sessionStorage.setItem('username', this.userDetails.username);
        sessionStorage.setItem('email', this.userDetails.email);
        sessionStorage.setItem('age', this.userDetails.age.toString());
        sessionStorage.setItem('birthdate', this.userDetails.birthdate);
      }
    }, (error)=>{
      console.log("Error is ", error)
    }); 
  }
  navby() {
    this.router.navigate(['/account/']); 
  }
}
