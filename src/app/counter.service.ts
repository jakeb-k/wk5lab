import { Injectable } from '@angular/core'; 

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    counter:number = 0;
    usercounter:number = 0;
    constructor(){}

    incrementCoutner(){
        this.counter = this.counter +1; 
        return this.counter;
    }

    incrementUserCounter(){
        this.usercounter = this.usercounter + 1;
        return this.usercounter; 
    }
}