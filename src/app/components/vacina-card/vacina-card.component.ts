import { Component, Input, OnInit } from '@angular/core';
import { VacinaModel } from '../vacina-model';

@Component({
  selector: 'app-vacina-card',
  templateUrl: './vacina-card.component.html',
  styleUrls: ['./vacina-card.component.css']
})
export class VacinaCardComponent implements OnInit {

  @Input () vacinacard: VacinaModel | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
