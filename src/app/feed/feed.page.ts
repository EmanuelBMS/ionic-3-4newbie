import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public user_name:string="John Linch";

  constructor() { }

  public plusTwoNumbers(num1:number,num2:number): void{
    //alert("My function worked!");
    alert(num1+num2);
  }

  ngOnInit() {
    //this.plusTwoNumbers(10,99);
  
  }

}
