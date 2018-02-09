import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1};
  slides = [
  {img:"/assets/carousel/coding.png"},
  {img:"/assets/carousel/coding2.png"},
  {img:"/assets/carousel/coding3.png"}

  ];

}
