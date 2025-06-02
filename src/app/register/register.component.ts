import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup, Validators} from '@angular/forms';
import { AsyncPipe,JsonPipe } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-register',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
   registerUser = new FormGroup({
     name: new FormControl('',[Validators.required,Validators.maxLength(20)]),
     email : new FormControl('',[Validators.required,Validators.email]),
     password:new FormControl('',[Validators.required,Validators.minLength(6)],),

   })
   onsubmit(){
    console.log(this.registerUser.value);
    
   }
}
