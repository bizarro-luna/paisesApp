import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  `
    button{
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent  {

  regiones:string[]=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva:string='';
  paisesRegion:Country[]=[];

  /**
   * MEtodo para obtener el estilo de los botones
   * @param region 
   * @returns 
   */
  getClaseCSS(region:string):string{
    return ( region===this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }


  constructor(private paisService:PaisService) { }

  /**
   * Metodo para activar la region
   * @param region 
   */
  activarRegion(region:string){

    if(region===this.regionActiva){return;}


    this.regionActiva=region;
    this.paisesRegion=[];
    this.paisService.buscarRegion(region).subscribe( paises => this.paisesRegion=paises );


  }

}
