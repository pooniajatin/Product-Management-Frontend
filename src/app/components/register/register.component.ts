import { Component, inject, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
//import { AsyncPipe,JsonPipe } from '@angular/common';
import { RegisterService } from '../../services/registerService/register.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { user } from '../../interface/user';
@Component({
  standalone: true,
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  private registerService = inject(RegisterService);
  successMessage!: string;
  errorMessage!: string;
  User!: FormGroup;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.User = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  onsubmit() {
    this.registerService.registerUser(this.User.value).subscribe({
      next: (res) => {
       // console.log('registered', res);
        this.successMessage = res.msg || 'Registration Successfull';
        this.router.navigate(['/login'])
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err.error.msg || 'Something went wrong';
      },
    });
  }
}
