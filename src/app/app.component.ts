import { Component } from '@angular/core';
import { RouterOutlet ,Router} from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { NgIf } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [RouterOutlet,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Login-Frontend';
  constructor(private router:Router){}
   get isLoggedIn():Boolean{
    return !!localStorage.getItem('Bearer')
  }
   navigateTo(path:string){
    this.router.navigate([path])
   }
}
