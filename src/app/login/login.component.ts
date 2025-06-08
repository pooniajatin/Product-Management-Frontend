import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/loginService/login.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  private  loginService = inject(LoginService)
  userId!:string
  profileId!:string
  success!:string;
  errormsg!:string
  CheckUser!:any
  constructor(private router :Router){}
 ngOnInit(): void {
   this.CheckUser = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)],),
   })
 }
 onsubmit(){
   this.loginService.loginUser(this.CheckUser.value).subscribe({
      next: (res)=>{
        localStorage.setItem('Bearer',res.accessToken);
        this.success = res.msg;
        this.router.navigate(['/products'])
        this.userId = res.profile.userId
        this.profileId = res.profile._id
        localStorage.setItem('profileId',this.profileId)
        localStorage.setItem('userId',this.userId)
      },
      error:(err)=>{
         if (err.error && err.error.msg) {
        this.errormsg = err.error.msg;
      } else if (err.msg) {
        this.errormsg = err.msg;
      } else if (err.status === 401) {
        this.errormsg = 'Unauthorized: Invalid credentials.';
      } else {
        this.errormsg = 'An unexpected error occurred. Please try again.';
      }
      this.success = '';
    
      }
   })
 }
}
