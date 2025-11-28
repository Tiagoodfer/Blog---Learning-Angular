import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input()
  photoCover:string = "https://miro.medium.com/v2/1*FKD2Uy_Q6r6AviZA2VD4RQ.png"

  @Input()
  cardTitle:string = "Mergulhe nas Inovações e Notícias de Tecnologia que Estão Definindo o Amanhã e Transformando Mundo Digital"

}
