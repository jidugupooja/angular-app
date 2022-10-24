import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TextService { 
  constructor(private http:HttpClient) { }
    gettodaysdate(){
    let date = new Date();
    return date;
    }

    getMyname(){
      return 'pooja';
    }
   
   getallusers():Observable<User[]>{
     return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    }
    

   }

