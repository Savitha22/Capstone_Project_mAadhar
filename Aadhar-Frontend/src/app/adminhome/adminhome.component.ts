import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ApiService } from '../service/api.service';
import { UserData } from './userdata.model';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  fetchedUsers: UserData[] = [];
  backendurl = 'http://localhost:8185/citizens';
  constructor(private http:HttpClient,private formBuilder:FormBuilder,private api:ApiService) {}

  ngOnInit(): void {
  }

  onFetchUsers(){
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

  onDeleteUser(id: number) {
    this.http.delete(this.backendurl + '/' + id).subscribe((response) => {
      console.log('User deleted: ' + response);
      // this.fetchPosts();
    });
  }


}
