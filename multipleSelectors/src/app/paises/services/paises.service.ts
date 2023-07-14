import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {combineLatest, Observable, of} from "rxjs";
import {FullPaisData } from "../interfaces/paises.interface";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private _baseURL : string = "https://restcountries.com/v3.1/"
  private _fieldsResponse : string = "?fields=name,cca3"
  private readonly _regions : string[] = [
    'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
  ]

  get regions() : string[]{
    return [...this._regions];
  }

  constructor(private httpService : HttpClient) { }

  getCountriesByRegion(region : string) : Observable<FullPaisData[]>{
    const urlRequest : string = `${this._baseURL}/region/${region}/${this._fieldsResponse}`;
    return this.httpService.get<FullPaisData[]>(urlRequest);
  }

  getCountriesByAlphaCode(countryCode : string) : Observable<FullPaisData[]>{
    const urlRequest : string = `${this._baseURL}/alpha/${countryCode}`;
    return this.httpService.get<FullPaisData[]>(urlRequest);
  }

  getCountryByAlphaCodeReduced(countryCode : string) : Observable<FullPaisData>{
    const urlRequest : string = `${this._baseURL}/alpha/${countryCode}/${this._fieldsResponse}`;
    return this.httpService.get<FullPaisData>(urlRequest);
  }

  getCountryByBorders(borders : string[]) : Observable<FullPaisData[]>{
    if(!borders){
      return of([]);
    }

    const requests : Observable<FullPaisData>[] = [];

    borders.forEach((borderAlphaCode) => {
      const request = this.getCountryByAlphaCodeReduced(borderAlphaCode);
      requests.push(request);
    })

    return combineLatest(requests);
  }

}
