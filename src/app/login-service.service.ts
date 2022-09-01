import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  sendData(jsonItems: any){
    return this.http.post('/api/auth', jsonItems); 
  }
}
