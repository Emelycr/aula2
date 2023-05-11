import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 nome = 'Emely';
 count = 10;


  menos() {
    console.log(this.count--);
    this.count = this.count --;
   
   
 }

   mais() {
    console.log(this.count++);
    this.count = this.count ++;

 }
}
   

