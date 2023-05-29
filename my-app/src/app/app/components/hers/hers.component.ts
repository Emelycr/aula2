import { Component } from '@angular/core';
import { Hero } from 'src/app/hers';

@Component({
  selector: 'app-hers',
  templateUrl: './hers.component.html',
  styleUrls: ['./hers.component.css']
})
export class HersComponent {

    vetor = [1, 5, 13, 24]

    heros = ["Super man", "Batman", "Capitão America", "Homem Formiga"];

    hers: Hero = {
      id: 1,
      nome: "Capitão America"
    }

}
