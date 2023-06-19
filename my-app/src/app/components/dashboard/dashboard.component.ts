import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) { }

  
  tasks = [];

  addTask(){
    console.log('add task');

    this.router.navigateByUrl('/task' , { 
       state: this.tasks,
    });
  
  }

}
