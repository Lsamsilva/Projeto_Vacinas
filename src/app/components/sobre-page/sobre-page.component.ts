import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-page',
  templateUrl: './sobre-page.component.html',
  styleUrls: ['./sobre-page.component.css']
})
export class SobrePageComponent implements OnInit {

  public imagemUrl = 'https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2021/01/Vacina-para-a-covid-19-Pinterest.jpg?quality=100&strip=info&resize=680,453'
  public titulo = 'Vacinas no Brasil';
  public descricao = 'Pretende-se apresentar algumas das principais características das vacinas contra o vírus Coronavírus que provoca Covid-19 aprovadas pela ANVISA (Agência Nacional de Vigilância Sanitária) para uso no Brasil: Coronav, Astrazenaca, Pfizer e Janssen. A vacina Sputnik não entrou nesta lista já que seu uso não foi aprovado de maneira global, somente alguns lotes específicos foram liberados.';

  constructor() { }

  ngOnInit(): void {
  }

}
