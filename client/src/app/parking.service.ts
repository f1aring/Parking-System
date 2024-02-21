import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Park } from './park';
import { Observable, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  private url = 'http://localhost:3000/parking';
  constructor(private http: HttpClient) { }

  getParkedCars(): Observable<Park []>{
    return this.http.get<Park []>(this.url)

  }

  parkACar(number_plate: any , slot: number): Observable<Park>{
    console.log(number_plate, slot)
    return this.http.post<Park>(this.url, {number_plate, slot});
  }

  updateTime(id: string): Observable<Park>{
    return this.http.put<Park>( this.url+id, {});
  }
  
}
