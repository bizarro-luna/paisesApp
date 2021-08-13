import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  tap }  from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';
  

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  /**
   * Api del servicio rest de paises
   */
  private apiUrl='https://restcountries.eu/rest/v2'

  constructor(private http:HttpClient) { }


  get obtenerParams():HttpParams{
    return  new HttpParams().set('fields','name;capital;flag;population;alpha2Code');
  }


  /**
   * Metodo para buscar por pais por medio del servicio rest 
   * @param termino 
   * @returns 
   */
  buscarPais(termino:string):Observable<Country[]>{
    const url=`${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:this.obtenerParams});
  }


  /**
   * Metodo para buscar por capital por medio del servicios rest
   * @param termino 
   * @returns 
   */
  buscarCapital(termino:string):Observable<Country[]>{
    const url=`${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params:this.obtenerParams});
  }

  /**
   * Metodo para buscar por codigo por medio del servicio rest
   * @param id 
   * @returns 
   */
  getPaisPorAlpha(id:string):Observable<Country>{
    const url=`${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  /**
   * Metodo para buscar por region por medio del servicio rest api
   * @param region 
   * @returns 
   */
  buscarRegion(region:string):Observable<Country[]>{

    
    const url=`${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url,{params:this.obtenerParams})
              .pipe(
                tap(console.log)
              )
  }

}
