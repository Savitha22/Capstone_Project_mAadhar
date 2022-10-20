import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ApiService } from '../service/api.service';
import { UserModel } from './user.model';
import { UserData } from './userdata.model';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  userModelObj:UserModel=new UserModel();
  public loginForm!: FormGroup;
  fetchedUsers: UserData[] = [];
  backendurl = 'http://localhost:8185/citizens';
  constructor(private http:HttpClient,private formBuilder:FormBuilder,private api:ApiService) {}

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      name : [''],
      dob : [''],
      emailid : [''],
      mobileno : [''],
      address : [''],
      gender : [''],
  })
    this.fetchUsers();
  }

  fetchUsers() {
    this.http
      .get(this.backendurl)
      .pipe(
        map((responseData) => {
          const userArray: UserData[] = [];
          for (const key in responseData) {
            var x = { ...responseData[key] };
            userArray.push(x);
          }
          return userArray;
        })
      )
      .subscribe((users) => {
        this.fetchedUsers = users;
      });
  }

  onEdit(user:any){
   this.userModelObj.citizenId=user.citizenId;
   this.loginForm.controls['name'].setValue(user.name);
   this.loginForm.controls['dob'].setValue(user.dob);
   this.loginForm.controls['emailid'].setValue(user.emailid);
   this.loginForm.controls['mobileno'].setValue(user.mobileno);
   this.loginForm.controls['address'].setValue(user.address);
   this.loginForm.controls['gender'].setValue(user.gender);
  }
  updateUser(){
    this.userModelObj.name=this.loginForm.value.name;
    this.userModelObj.emailid=this.loginForm.value.emailid;
    this.userModelObj.gender=this.loginForm.value.gender;

    this.userModelObj.address=this.loginForm.value.address;
    this.userModelObj.mobileno=this.loginForm.value.mobileno;
    this.userModelObj.dob=this.loginForm.value.dob;

    this.api.UpdateUser(this.userModelObj,this.userModelObj.citizenId)
    .subscribe(res=>{
      alert("Updated SuccessFully!!");
      this.loginForm.reset();
      this.fetchUsers();
    },err=>{
      alert("Something Went Wrong:/")
    })
  }

}
