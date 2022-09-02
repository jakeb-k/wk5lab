import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'; 
import { LoginServiceService } from './login-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4tut';

  constructor(private router:Router, private service: LoginServiceService) {}

  ngOnInit() {
  }

  navbyurl(id:number) {
    this.router.navigateByUrl('/login/'+id);
  }

  navby(id:number) {
    this.router.navigate(['/login/',id]); 
  }
  navhome() {
    sessionStorage.clear(); 
    this.router.navigate(['//']); 
  }
}
