
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  userid="";
  userNum:number=0; 
  cnt:number=0;
  paramsub: Subscription = new Subscription;  



  constructor( private route:ActivatedRoute, private counter:CounterService) { }

  ngOnInit(): void {

    this.userid = this.route.snapshot.params.id;
    this.cnt = this.counter.incrementCoutner(); 
    
    this.paramsub = this.route.paramMap.subscribe(params => {
        this.userid = String(params.get('id'));
        this.userNum = this.counter.incrementUserCounter(); 

    }); 


  }

}
