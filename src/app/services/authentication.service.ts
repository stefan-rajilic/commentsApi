import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Authentication} from '../models/Authentication.model';
import Token from '../Token';
import { LoginComponent } from '../log-in/log-in.component';
import {User} from '../models/User.model';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  public static token: Authentication = new Authentication('');

  constructor(private http: HttpClient) {

  }

  getLogin(email: string, password: string) {
    return this.http.post<Authentication>('http://134.122.72.178:3000/session/login', {email, password});
  }

  getRegistration(username: string, email: string, password: string, passwordcontrol: string) {
    return this.http.post<Authentication>('http://134.122.72.178:3000/session/register', {username, email, password, passwordcontrol});
  }
  getLogout() {
    const headers = new HttpHeaders()
      .set('User-Token', AuthenticationService.token.access_token);

    console.log(AuthenticationService.token.access_token);

    return this.http.delete<User>('http://134.122.72.178:3000/session/logout', {headers});
  }

  setToken(token: Authentication) {
    console.log(token);
    AuthenticationService.token = token;
  }
}
