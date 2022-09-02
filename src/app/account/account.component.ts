import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  imageSrc = 'assets/tatreference2.PNG'; 
  email = sessionStorage.getItem('email');
  age = sessionStorage.getItem('age');
  birthdate = sessionStorage.getItem('birthdate');
  name = sessionStorage.getItem('username'); 
  useremail = String("") ;  
  username = String("");
  userbirthdate = String("");
  userage = Number(); 
    
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void { 
  }

  changeSessionData(){
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('email', this.useremail);
    sessionStorage.setItem('age', this.userage.toString());
    sessionStorage.setItem('birthdate', this.userbirthdate);
    this.email = sessionStorage.getItem('email');
    this.age = sessionStorage.getItem('age');
    this.birthdate = sessionStorage.getItem('birthdate');
    this.name = sessionStorage.getItem('username'); 
    this.navby(); 
  }
  navby() {
    this.router.navigate(['/account/']); 
  }
  navhome() {
    sessionStorage.clear(); 
    this.router.navigate(['//']); 
  }

}
