import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  discription = [
    {img: "/assets/csgo.jpg",
    date: "27/02/2018",
    time: "6:00 PM" ,
    venue: "SGSITS" ,
    dis:"Bet you misssed gaming since school days. We got that feeling too, so here it is. Club CodeFoster brings you a series of intense LAN gaming tournaments to give you a fulfilling experience of fun, nostalgia and thrilling competition in its next event called FlickShot.,It will test your gaming skills with the best first person shooter this world has ever had, Counter Strike.Participants can take part in 5v5 team based tournament or individual 1v1 tournament. So gamers,get the frags rolling with that flick of the wrist,as you fight in FlickShot for some very exciting prizes. Work hard, play hard."}
  ]
}
