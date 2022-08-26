import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  imageSrc = 'assets/tatreference2.PNG'; 
  email = "";
  password = "";

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
