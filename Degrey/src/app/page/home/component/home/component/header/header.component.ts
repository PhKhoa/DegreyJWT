import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserInfo } from 'src/app/model/user_info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isUser:boolean=false;
  user:UserInfo|null=null;

  constructor(private loginService:LoginService,private router:Router, private userService:UserService ) { 
    this.userService.userInfo.subscribe((user)=>{
      if(user){
        this.isUser=true;
        console.log(this.isUser);
        this.user=user;
      }else{
        this.isUser=false;
      }
    })
  }
  async login(){
    let loginResult = await this.loginService.loginWithGoogle();
    if(loginResult==null){
      console.log('Login failed');
    }else {
      console.log('Login success');
      this.isUser=true;
      this.router.navigate(['/home']);
    }
  }

  async logout(){
    // console.log('Logout');
    await this.userService.logout();
    console.log('Logout success');
    this.router.navigate(['/home']);
  }

  async toAdmin(){
    if(this.userService.userInfo.value?.name){
      
      this.router.navigate(['/admin']);
    }else{
      console.log('You are not admin');
    };
  }
}
