import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/loginService/login.service';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  private  loginService = inject(LoginService)
  CheckUser!:any
 ngOnInit(): void {
   this.CheckUser = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)],),
   })
 }
 onsubmit(){
   this.loginService.loginUser(this.CheckUser.value).subscribe({
      next: (res)=>{
        console.log(res)
        localStorage.setItem('Bearer',res.Token);
      },
      error:(err)=>{
        console.log(err);
      }
   })
 }
}
