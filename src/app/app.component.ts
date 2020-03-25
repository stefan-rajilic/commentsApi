import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'API';

  constructor(private http: HttpClient) {
    const headers = new HttpHeaders();
    const url = 'http://134.122.72.178:3000';
    headers.append('Content-Type', 'application/json');
    headers.append('client_id', '23');

  }
}
