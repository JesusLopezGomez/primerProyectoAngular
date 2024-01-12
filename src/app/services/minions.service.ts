import { Injectable, OnInit } from '@angular/core';
import { Minion } from '../interface/minion';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinionsService{

  constructor(private http:HttpClient) {}
  
  termino:string = "";

  private url:string = "http://localhost:3000/minions";

  getMinions():Observable<Minion[]> {
    return this.http.get<Minion[]>(this.url);
  }

  getMinionByName(name:string):Observable<Minion[]>{
    return this.http.get<Minion[]>(`${this.url}?name=${name}`);
  }

  getMinionById(id:string):Observable<Minion[]>{
    return this.http.get<Minion[]>(`${this.url}?id=${id}`);
  }
/*
  getFilterMinions(term:string):Minion[]{
    return this.minions.filter(minion => minion.name.toLocaleLowerCase().startsWith(term.toLocaleLowerCase()));
  } 

  getMinionByName(name:string):Minion[]{
    return this.minions.filter(minion => minion.name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase()));
  }
  */
}
