import { Component, OnInit } from '@angular/core';
import { PersonagemServiceService } from '../../personagem-service.service';
import { PersonagemClass } from './PersonagemClass';

@Component({
  selector: 'app-harry-potter',
  templateUrl: './harry-potter.component.html',
  styleUrls: ['./harry-potter.component.scss']
})

export class HarryPotterComponent implements OnInit {

  public personagens: PersonagemClass[] = []
  constructor(private _service: PersonagemServiceService){}

  ngOnInit(): void {
      this._service.getPersonagens().subscribe(
        (res) =>{
          this.personagens = res
        }
      )
  }

  public getPersonagensFromService(){

  }
}
