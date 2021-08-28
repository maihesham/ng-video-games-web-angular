import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, Game } from '../Moduls';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BASE_URL: string ='https://rawg-video-games-database.p.rapidapi.com'

  constructor(private http:HttpClient) { }
  getGamesList(ordering:string,search:string):
  Observable<APIResponse<Game>>
  {
     let params=new HttpParams().set('ordering',ordering);
     if(search){
       params=new HttpParams().set('ordering',ordering).set('search',search);
     }
     return this.http.get<APIResponse<Game>>(this.BASE_URL+`/games`, {
      params: params,
    });
 }
}
