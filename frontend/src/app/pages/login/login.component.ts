import { Component, OnInit } from '@angular/core';
import { LoginData } from './LoginTypes';
import { SigninService } from './signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginData: LoginData = {
    username: '',
    password: ''
  }

  constructor(
    private signSvc: SigninService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  handler(){
    this.signSvc.sign(this.loginData).subscribe((res: any) => {
      localStorage.setItem("todoappToken", res.token);
      this.router.navigate(["/list"])
    })
  }
}
