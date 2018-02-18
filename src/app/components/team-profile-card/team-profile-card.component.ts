import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-profile-card',
  templateUrl: './team-profile-card.component.html',
  styleUrls: ['./team-profile-card.component.css']
})
export class TeamProfileCardComponent implements OnInit {

info : any;
theme : string;
  constructor() {
    
   }
   slideConfig = {'slidesToShow': 4, 'slidesToScroll': 1};

  ngOnInit() {
  }
  slides = [
    { memberName: 'Ashish Patel',
    memberRank: 'Head',
    memberSkills:'Developer',
    profilePictureURL:"/assets/profile-picture.png"},
    {memberName: 'Ashish Patel',
    memberRank: 'Head',
    memberSkills:'Developer',
    profilePictureURL:"/assets/profile-picture.png"},
    {memberName: 'Ashish Patel',
    memberRank: 'Head',
    memberSkills:'Developer',
    profilePictureURL:"/assets/profile-picture.png"},
    {memberName: 'Ashish Patel',
    memberRank: 'Head',
    memberSkills:'Developer',
    profilePictureURL:"/assets/profile-picture.png"},
    {memberName: 'Ashish Patel',
    memberRank: 'Head',
    memberSkills:'Developer',
    profilePictureURL:"/assets/profile-picture.png"}
    ];
}
 