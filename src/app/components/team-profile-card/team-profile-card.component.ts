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
    memberRank: 'President',
    memberSkills:'',
    profilePictureURL:"/assets/profile-picture.png"},
    {memberName: 'Abhishek Chelawat',
    memberRank: 'Vice-President',
    memberSkills:'',
    profilePictureURL:"/assets/profile-picture.png"},
    {memberName: 'Siddharth Bhatnagar',
    memberRank: 'Secretary',
    memberSkills:'',
    profilePictureURL:"/assets/profile-picture.png"},
    {memberName: 'Sameeksha Mahajan',
    memberRank: 'Treasurer',
    memberSkills:'',
    profilePictureURL:"/assets/profile-picture.png"},
    {memberName: 'Anand Sajankar',
    memberRank: 'Vice-Secretary',
    memberSkills:'',
    profilePictureURL:"/assets/profile-picture.png"}
    ];
}
 