import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:8080/api/reservations';
  constructor(private http: HttpClient) { }

 getByIdReservation( id: number): Observable<Reservation> {
  return this.http.get(this.baseUrl + `/${id}`);
}
}
