import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../model/reservation';
=======
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../model/reservation';
import {Observable} from 'rxjs';
import {RESERVATION_API_URL} from '../api-urls';
>>>>>>> develop

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
<<<<<<< HEAD
  private baseUrl = 'http://localhost:8080/api/reservations';
  constructor(private http: HttpClient) { }

 getByIdReservation( id: number): Observable<Reservation> {
  return this.http.get(this.baseUrl + `/${id}`);
}
=======
  reservation: Reservation = {};

  constructor(private httpClient: HttpClient) { }

  save(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(RESERVATION_API_URL, reservation);
  }

  findById(id: any): Observable<Reservation> {
    return this.httpClient.get(`${RESERVATION_API_URL}/${id}`);
  }

  findByRenter(id: any): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(`${RESERVATION_API_URL}/cart/${id}`);
  }

  accessInputStatus(id: any): Observable<any> {
    this.reservation = {
      id: id,
      status: true
    }
    return this.httpClient.put(`${RESERVATION_API_URL}/${id}`, this.reservation);
  }

>>>>>>> develop
}
