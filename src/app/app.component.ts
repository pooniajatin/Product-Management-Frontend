import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterLink, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgIf,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Login-Frontend';
  constructor(private router: Router) {}
  get isLoggedIn(): Boolean {
    return !!localStorage.getItem('Bearer');
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
  dropdown() {}
}
