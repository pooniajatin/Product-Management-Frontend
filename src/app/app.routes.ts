import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

import { authGuard } from './RouteGuards/authGuard/auth.guard';
import { ProductComponent } from './components/product/product.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { ProducttableComponent } from './components/producttable/producttable.component';
import { ProfileSectionComponent} from './components/profile-section/profile-section.component';
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
    path:'createproduct',
    component:CreateproductComponent,
        canActivate: [authGuard],

  },
  {
    path:'createproduct/:id',
    component:CreateproductComponent,
        canActivate: [authGuard],

  },
  {
    path:'productable',
    component:ProducttableComponent,
        canActivate: [authGuard],

  },
  {
    path:'profile',
    component: ProfileSectionComponent,
    canActivate: [authGuard],
  },
  
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full',
  },
];
