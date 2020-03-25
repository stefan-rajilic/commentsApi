import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private password = '';
  private userName = '';
  private checkPassword = '';
  private email = '';
  private url = ' http://134.122.72.178:3000/session/register';

  constructor(private httpClient: HttpClient, private router: Router) { }

  clickMe() {
    this.httpClient.post(this.url, {
      username: this.userName,
      email: this.email,
      password: this.password,
      checkpassword: this.checkPassword
    }).subscribe(
      (data: any) => {
        this.router.navigate(['/home']);
      }, (error) => {
      }
    );
  }

  ngOnInit() {
  }

}
