import { Component, OnInit } from '@angular/core';
import { PlatinumService } from '../services/platinum.service';
import { Employee } from '../model/platinum.model';

@Component({
  selector: 'app-platinum',
  templateUrl: './platinum.component.html',
  styleUrls: ['./platinum.component.css']
})
export class PlatinumComponent implements OnInit{

  constructor(private services: PlatinumService) {}

  Users : Employee[] = [];
  
  ngOnInit(){
    this.GetAllUsers();
  }

  GetAllUsers(){
    return this.services.getAllUsers().subscribe({
      next: (users) => {
        this.Users = users
        // console.log(users)
      },
      error: (res) => {
        console.log("Oops! Something Went Wrong",res);
      }
    })
  }
}
