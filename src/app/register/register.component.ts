import { Component, inject } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup, Validators} from '@angular/forms';
//import { AsyncPipe,JsonPipe } from '@angular/common';
import { RegisterService } from './services/register.service';
import { NgIf } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-register',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private registerService = inject(RegisterService)
  successMessage !:string;
  errorMessage !: string;
  User = new FormGroup({
     name: new FormControl('',[Validators.required,Validators.maxLength(20)]),
     email : new FormControl('',[Validators.required,Validators.email]),
     password:new FormControl('',[Validators.required,Validators.minLength(6)],),

   })
   onsubmit(){
    this.registerService.registerUser(this.User.value).subscribe({
      next :(res)=> {
        console.log('registered',res)
        this.successMessage = res.msg ||"Registration Successfull"
      },
      error: (err)=>{
        console.log(err)
        this.errorMessage= err.error.msg||"Something went wrong"
      }
      
    })
    
   }
}
