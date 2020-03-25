import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Token from '../Token';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  private url = 'http://134.122.72.178:3000/session/logout';

  constructor(private httpClient: HttpClient, private router: Router) { }

  clickMe() {
    const headers = new HttpHeaders().set('User-Token', Token.token);
    this.httpClient.delete(this.url, {
      headers
    }).subscribe(
      (data: any) => {
        Token.token = '';
        this.router.navigate(['/home']);
      }, (error) => {
      }
    );
  }

  ngOnInit() {
  }

}
