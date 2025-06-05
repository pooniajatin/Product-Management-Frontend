import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DummyComponent } from './dummy/dummy.component';
import { authGuard } from './RouteGuards/authGuard/auth.guard';
import { ProductComponent } from './product/product.component';
import { EditproductsComponent } from './editproducts/editproducts.component';
export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'products',
    component: ProductComponent,
    canActivate: [authGuard],
  },
  {
    path:'editproducts',
    component: EditproductsComponent
  },
  {
    path: 'dummy',
    component: DummyComponent,
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full',
  },
];
