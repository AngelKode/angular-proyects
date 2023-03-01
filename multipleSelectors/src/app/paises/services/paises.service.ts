import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FullPaisData, PaisData} from "../interfaces/paises.interface";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private _baseURL : string = "https://restcountries.com/v3.1/"
  private _fieldsReponse : string = "?fields=name,cca3"
  private readonly _regions : string[] = [
    'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
  ]

  get regions() : string[]{
    return [...this._regions];
  }

  constructor(private httpService : HttpClient) { }

  getCountriesByRegion(region : string) : Observable<PaisData[]>{
    const urlRequest : string = `${this._baseURL}/region/${region}/${this._fieldsReponse}`;
    return this.httpService.get<PaisData[]>(urlRequest);
  }

  getCountriesByAlphaCode(countryCode : string) : Observable<FullPaisData[]>{
    const urlRequest : string = `${this._baseURL}/alpha/${countryCode}`;
    return this.httpService.get<FullPaisData[]>(urlRequest);
  }

}
