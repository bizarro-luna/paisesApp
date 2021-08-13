import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {


  termino:string='';
  hayError:boolean=false;
  paisesPor:Country[]=[];


  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.termino=termino;
    this.hayError=false;
    this.paisService.buscarCapital(this.termino)
    .subscribe( paises =>{
      console.log(paises);
      this.paisesPor=paises;
    },(err) =>{
      this.hayError=true;
      this.paisesPor=[];
    });
  }


  sugerencias(termino:string){
    this.hayError=false;
    
  }
  

}
