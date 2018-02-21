import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getAndSetDescriptionData();
  }
  form() {
    document.getElementsByTagName('FORM')[0].setAttribute("style", "display:block");
  }
  description: any;
  getAndSetDescriptionData() {
    let url = "api/events/5a8c06d0f02b72190b19c981";
    this.http.get(url).subscribe((data) => {
      this.description = [];
      console.log(data)
      if (data['status']) {
        console.log(data['message'])

        let description: any = {
          img: data['message'].featured_img,
          dates:data['message'].start_data,
          topic:data['message'].title,
          datee:data['message'].end_date,
          desc:data['message'].desc,
          paid:data['message'].paid,
          amount:data['message'].amount,
          venue :data['message'].venue
        }
        this.description=description;
      } else {
        console.log("err", data);
      }
    });
  }
}
