import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, take, tap, toArray } from "rxjs";
import { ICardModel } from "../models/card-model";
import { TODO_GET_URL } from "./utils/constants";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class HttpTodosService {

  constructor(private http: HttpClient) {
  
  }
  
  public getTodos(): Observable<ICardModel[]>{
    return this.http.get<ICardModel[]>(TODO_GET_URL).pipe(
        tap((res) => console.log(res)),
        map((cards) => {
          return cards.slice(0,20)
        } ),
        take(20)
    )
  }
  
  public deleteTodo(id: number):Observable<ICardModel>{
      return this.http.delete<ICardModel>(`${TODO_GET_URL}${id}`).pipe(
      
      )
  }
}
