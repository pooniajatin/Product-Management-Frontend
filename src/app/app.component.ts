import { Component } from '@angular/core';
import { RouterOutlet ,Router} from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Login-Frontend';
  constructor(private router:Router){}
   navigateTo(path:string){
    this.router.navigate([path])
   }
}
