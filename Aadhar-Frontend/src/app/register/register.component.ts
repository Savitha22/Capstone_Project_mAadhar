import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  url='http://localhost:8185/citizens';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onAddCitizen(citizenData: {name:string,dob:string,emailid:string,gender:string,mobileno:string,address:string }, form: NgForm) {
    this.http.post(this.url, citizenData).subscribe((responseData) => {
      console.log(responseData);
      alert("Registered Successfully!!");
      form.reset();
    },err=>{
      alert("Something Happened!!")
    });
  }

}
