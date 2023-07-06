import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { PromotionsComponent } from './header/promotions/promotions.component';
import { AuthComponent } from './header/auth/auth.component';
import { LoginComponent } from './header/auth/login/login.component';
import { RegisterComponent } from './header/auth/register/register.component';
import { ForgotPasswordComponent } from './header/auth/forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './header/auth/recover-password/recover-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    PromotionsComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    RecoverPasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
