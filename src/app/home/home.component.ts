import { DOCUMENT } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { TextService } from '../text.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User[] = [];
  a:string ='angular variable'
  b='no datatype';
  status=true;
  d=123;
  name1='pooja pillapichuka';
  name2='dinesh hero';


  money = 435657;
  performance = 2;
  todaydate = new Date();
  document:any;
  mobiles=['redmi','iphone','samsung'];
  


  constructor (private textserv : TextService) {
    

    
   }
   name:any;
   

  ngOnInit(): void {
    alert('hellow this is from homecomponent Ngonit');
  }
  printdata(event:any){
    //alert(this.name);
    alert(this.textserv.gettodaysdate()); 
   }
   printmyname(){
    alert(this.textserv.getMyname);

   }
   getalluserinformation(){
    this.textserv.getallusers().subscribe(user=>{
      this.user=user;
    });
   }


}
  
