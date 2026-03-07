import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class UsersService {
  private baseAPI = "https://fakestoreapi.com/users"

  number: number = 1

  constructor(private http: HttpClient) { }

  // get users
  // GET https://fakestoreapi.com/users
  // APLICAR COMO TAREA UNA INTERFACE PARA EL USER
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseAPI)
  }

  // add user
  // POST https://fakestoreapi.com/users
  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.baseAPI, user)
  }

  // AGREGAR PATCH y DELETE
} 