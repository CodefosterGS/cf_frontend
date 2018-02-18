import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventsServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getAllEvents() {
    return this.httpClient.get('/events');
  }
}
