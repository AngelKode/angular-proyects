import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import {GifData, SearchGifResponse} from '../interfaces/gif.interface'

const API_KEY : string = "jLxyb7g76Q9yZBFIQtyRfWYmTNI5cACK";
const BASE_API_URL : string = `/v1/gifs`;

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private _tagsHistory : string[] = [];
  readonly MAX_GIF_HISTORY : number = 10;
  public gifList !: GifData[];
  public isLoading : boolean = false;

  constructor(
    private httpRequest : HttpClient
  ) { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  public searchTag(tag : string) : void{
    if(tag.length < 1) return;

    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((findedTag) => findedTag !== tag);
    }

    const requestParams = new HttpParams()
      .set('q',tag)
      .set('limit',10)
      .set('api_key', API_KEY);
    const requestHeaders = new HttpHeaders().set('Access-Control-Allow-Origin','*');

    this.httpRequest.get<SearchGifResponse>(`${BASE_API_URL}/search`,{params:requestParams, headers:requestHeaders})
    .subscribe(({data : gifsData}) => {
      this.gifList = [...gifsData];
    })

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,this.MAX_GIF_HISTORY);
  }
}
