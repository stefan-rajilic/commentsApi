import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Token from '../Token';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public url = 'http://134.122.72.178:3000/user';
  public email = '';
  public id = '';
  public userName = '';

  constructor(private httpClient: HttpClient, private router: Router) {
    const headers = new HttpHeaders().set('User-Token', Token.token);
    this.httpClient.get(this.url, {
      headers
    }).subscribe(
      (data: any) => {
        this.userName = data.username;
        this.email = data.email;
        this.id = data.id;
        console.log(this.userName);
      }, (error) => {
        console.log(error);
      }
    );
  }

  clickMe() {
    const headers = new HttpHeaders().set('User-Token', Token.token);
    this.httpClient.delete(this.url, {
      headers
    }).subscribe(
      (data: any) => {
        Token.token = '';
        this.router.navigate(['/home']);
      }, (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
