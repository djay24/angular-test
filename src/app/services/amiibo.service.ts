import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Amiibo } from '../interfaces/amiibo';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  private apiUrl = 'http://www.amiiboapi.com/api/';

  constructor(private http: HttpClient) { }
  myFunction() {
    console.log("Hello World");
  }
  getAmiibos(): Observable<Amiibo[]> {
    return this.http.get<Amiibo[]>(`${this.apiUrl}amiibo`)
  }

  getAmiibo(tail: string): Observable<Amiibo> {
    return this.http.get<Amiibo>(`${this.apiUrl}amiibo/?tail=${tail}`);
  }
  getFilteredAmiibos(category: string, value: string): Observable<Amiibo[]> {
    return this.http.get<Amiibo[]>(`${this.apiUrl}amiibo/?${category}=${value}`)
  }
}
