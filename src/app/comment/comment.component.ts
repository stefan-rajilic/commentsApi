import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {Authentication} from '../models/Authentication.model';
import Token from '../Token';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpClient = httpClient;
  }

  comment;
  sendTo;
  url = 'http://134.122.72.178:3000/session/logout';

  postComment() {
    const body = {
      user_id: this.sendTo,
      body: this.comment,
    };

    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);

    this.httpClient.post<Authentication>('http://134.122.72.178:3000/comments', body, { headers, observe: 'response'}).subscribe(data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
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
      }
    );
  }


  ngOnInit() {

  }

}
