import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  photoCover: string = "https://angular.dev/assets/images/ng-image.jpg"

  @Input()
  cardTitle: string = "Projeto Angular 2025"

  @Input()
  cardDescription: string = "O Google anunciou o lançamento do Angular 13, trazendo várias melhorias e novidades para o framework. Confira as\n" +
    "      principais mudanças e como elas podem impactar seus projetos."

}
