import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../model/reservation';
import {Observable} from 'rxjs';
import {RESERVATION_API_URL} from '../api-urls';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
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

}
