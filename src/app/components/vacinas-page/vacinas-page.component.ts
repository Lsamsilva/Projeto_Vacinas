import { Component, OnInit } from '@angular/core';
import { VacinaModel } from '../vacina-model';

@Component({
  selector: 'app-vacinas-page',
  templateUrl: './vacinas-page.component.html',
  styleUrls: ['./vacinas-page.component.css']
})
export class VacinasPageComponent implements OnInit {

     vacinas: VacinaModel [] = [];

  constructor() { }

  ngOnInit(): void {

    this.vacinas = [
      {
        nome : 'Coronavac',
        tecnologia : 'Vírus Inativo',
        eficacia : 'Global: 62.3%',
        intervaloDoses : '14 a 28 dias',
        temperatura : '2 a 8ºC',
        voluntarios : '12.5 mil pessoas',
        nacionalidade : '',
      },
      {
        nome : 'Astrazeneca',
        tecnologia : 'Vetor Viral',
        eficacia : '76% após 1ª dose e 81% após 2ª dose',
        intervaloDoses : '12 semanas',
        temperatura : '2 a 8ºC',
        voluntarios : '10 mil pessoas',
        nacionalidade : '',
      },
      {
        nome : 'Pfizer',
        tecnologia : 'RNA mensageiro',
        eficacia : '95% após 2ª dose',
        intervaloDoses : 'Até 12 semanas',
        temperatura : 'Pode ser Armazenada por até 5 dias em temperaturas de 2 a 8ºC; entre -25 e -15ºC por até duas semanas e entre -90 e -60ºC após este período.',
        voluntarios : '2 mil pessoas',
        nacionalidade : '',
      },
      {
        nome : 'Janssen',
        tecnologia : 'Vetor Viral',
        eficacia : '66.9% de eficácia para casos leves e moderados e 76.7% contra casos graves 14 dias após a aplicação',
        intervaloDoses : 'Não se Aplica. Vacina de Dose única.',
        temperatura : '2 a 8ºC.',
        voluntarios : '7.5 mil pessoas',
        nacionalidade : '',
      }

    ]

  }

}
