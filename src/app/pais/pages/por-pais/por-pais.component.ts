import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [

    `  li{
      cursor:pointer;
    }

    `

  ]
})
export class PorPaisComponent  {


  termino:string='';
  hayError:boolean=false;
  paisesPor:Country[]=[];

  mostrarSugeridos:boolean=false;

  paisesSugeridos:Country[]=[];

  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.mostrarSugeridos=false;
    this.termino=termino;
    this.hayError=false;
    this.paisService.buscarPais(this.termino)
    .subscribe( paises =>{
      console.log(paises);
      this.paisesPor=paises;
    },(err) =>{
      this.hayError=true;
      this.paisesPor=[];
    });
  }

  sugerencias(termino:string){
    this.mostrarSugeridos=true;
    this.hayError=false;
    this.termino=termino;
    if(termino.length===0){
      this.paisesSugeridos=[];
      return;
    }
    this.paisService.buscarPais(termino)
    .subscribe(
      paises=>this.paisesSugeridos=paises.splice(0,5),
      (err)=>this.paisesSugeridos=[]
      );
    
  }

 
  buscarSugerido(termino:string){

    this.buscar(termino);
    
  }

}
