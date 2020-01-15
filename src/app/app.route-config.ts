import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService as AuthGurad } from './shared/auth/auth-guard.service';
export const routerConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGurad]
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
