import { Hero } from './../../hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  vetor = [1, 5, 13, 24]

  hero_name = ''

  heroes = ["Thor", "Homem de Ferro", "Visão", "Thanos"];

  vetorAna = [1, 2, 3, 4, 5, 6, 7]

  hero: Hero = {
    id: 1,
    nome: "Capitão América"
  }




}
