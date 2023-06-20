import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';
import {Matrix} from "../type/matrix";

@Injectable({
  providedIn: 'root'
})
export class SimulatorService {

  constructor(private http: HttpClient) { }

  getMatrix(rows: number, columns: number): Observable<Matrix> {
    return this.http.get<Matrix>(`http://localhost:3000/generateMatrix?rows=${rows}&columns=${columns}`);
  }
}
