import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { routerConfig } from './app.route-config';
import { UserBaseService } from './shared/services/user-base.service';

import {APP_BASE_HREF, CommonModule} from '@angular/common';
import { StorageService } from './shared/services/storage.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuardService } from './shared/auth/auth-guard.service';
import { AuthService } from './shared/auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig),
  ],
  exports:[BrowserModule,FormsModule] ,
  providers: [UserBaseService,StorageService,AuthGuardService,AuthService,{provide: APP_BASE_HREF, useValue : '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
