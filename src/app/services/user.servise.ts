import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/User.model';
import {Authentication} from '../models/Authentication.model';
import {AuthenticationService} from './authentication.service';
import Token from '../Token';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private info: User = new User('', '', '');


  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  getUser() {
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);

    console.log(AuthenticationService.token.access_token);

    return this.http.get<User>('http://85.160.64.233:3000/user', {headers});
  }


}
