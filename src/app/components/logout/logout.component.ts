import { Component, inject, OnInit } from '@angular/core';
import { LogoutService } from '../../services/logoutService/logout.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  private logoutService = inject(LogoutService);
  constructor(private router :Router){}
  ngOnInit(): void {
    this.logout();
  }
  logout(){
    this.logoutService.logoutUser({}).subscribe({
      next: (res)=>{
        //console.log("cookie",document.cookie)
        localStorage.removeItem('Bearer');
        localStorage.removeItem('profileId')
        localStorage.removeItem('userId')
        this.router.navigate(['/register'])
      },
      error:(err)=>{
        console.log(err)
        
      }
    })
  }
}
