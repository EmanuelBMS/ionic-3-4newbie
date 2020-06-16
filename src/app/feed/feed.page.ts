import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers:[
    MovieService
  ]
})
export class FeedPage implements OnInit {

  public objeto_feed = {
    title:"John Linch",
    date: "November 05, 1955",
    description: " This is a \"Facebook\" styled Card. The header is created from a Thumbnail List item\, the content is from a card-body consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-footer.",
    qtde_likes:1,
    qtde_coments:5,
    time_coment:"11h ago"

  }

  public video_list = new Array<any>();

  public user_name:string="John Linch";

  constructor(
    private movieService: MovieService
  ) { }

  public plusTwoNumbers(num1:number,num2:number): void{
    //alert("My function worked!");
    alert(num1+num2);
  }

  ngOnInit() {
    //this.plusTwoNumbers(10,99);
    this.movieService.getLatestMovies().subscribe(
      data=>{
        //change object to any type format
        const response = (data as any);
        //convert text format to Json format
        const object_return = JSON.parse(response._body);
        
        this.video_list = object_return.results;
        console.log(object_return);
      }, error => {
        console.log(error);
      }
    )
  
  }

}
