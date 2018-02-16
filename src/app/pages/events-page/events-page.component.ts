import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
events:any=[{title:"XXX",img:"/assets/carousel/coding.ong",content:"we are the bros",date:""},{title:"XXX",img:"/assets/carousel/coding.ong",content:"we are the bros",date:""}];
}
