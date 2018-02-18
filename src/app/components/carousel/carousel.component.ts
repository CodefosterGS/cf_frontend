import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAndSetCarouselData();
  }

  slideConfig = { 'slidesToShow': 1, 'slidesToScroll': 1, 'autoplay': true };
  slides:any = [];

  getAndSetCarouselData() {
    let url = "api/events/featured";
    this.http.get(url).subscribe((data)=>{
      this.slides = [];
      if(data['status']){
        data['message'].map(event => {
          let slide: any = {
            img: event.featured_img,
            date: event.start_date,
            topic: event.title,
            start: event.start_data,
            venue: event.venue,
            
          }
          this.slides.push(slide);
        });
      }else{
        console.log("err",data);
      }
    });
  }
}
