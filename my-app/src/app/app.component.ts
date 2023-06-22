import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// git config --global user.email "beto@beto.com.br"

export class AppComponent {
  nome = 'Beto';
  count = 10;

  vetor = [10, 20, 30, 40, 50]


   menos(){
    this.count--;
  }

  mais(){
    this.count++;
  }

}
