import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';

const appRoutes:Routes=[
  { path: '', redirectTo: 'home' , pathMatch:'full' },
  { path: 'adminlogin', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path : 'register' , component: RegisterComponent},
  { path : 'userlogin' , component :UserComponent},
  { path : 'adminhome' , component: AdminhomeComponent},
  { path : 'userhome' , component: UserhomeComponent}



]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    RegisterComponent,
    UserComponent,
    AdminhomeComponent,
    UserhomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
