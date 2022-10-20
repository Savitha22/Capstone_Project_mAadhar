import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordStrengthValidator } from "./password-strength.validators"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public loginForm!: FormGroup;
  url="http://localhost:8185/admin";
  submitted=false;
  
  constructor(private formBuilder: FormBuilder,private http: HttpClient , private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      admin : ['',Validators.required],
      password : ['',Validators.compose([
        Validators.required, PasswordStrengthValidator])]

  })
  }
  onSubmit() {
    this.submitted = true;
    this.login();
  }

  login(){
    this.http.get<any>(this.url).subscribe(res=>{
      const log = res.find((a:any)=>{
        return a.admin === this.loginForm.value.admin && a.password === this.loginForm.value.password      
      });
      if(log){
        alert("Login Success,Click Ok to continue!!");
        this.loginForm.reset();
        this.router.navigate(['adminhome']);
      }else{
        alert("Try Again!!");
      }
    },err=>{
        alert("Something Went Wrong!!");
        this.loginForm.reset();
    })
      
    
  }


}
