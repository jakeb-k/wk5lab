
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
    userDetails = {
      "email":this.useremail,
      "password":this.userpassword
    }; 
   
    sendit = JSON.stringify(this.userDetails); 

  constructor( private route:ActivatedRoute, private router:Router, private http:HttpClient, private service: LoginServiceService) { }

  ngOnInit(): void {
  }
  
  sendDataFromApi() {
  
    this.service.sendData(this.userDetails).subscribe((response)=>{
      console.log('Reponse from API is ', response)
    }, (error)=>{
      console.log("Error is ", error)
    }); 
  }
}
