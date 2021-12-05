import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../model/reservation';
import {Observable} from 'rxjs';
import {RESERVATION_API_URL} from '../api-urls';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) { }

  save(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(RESERVATION_API_URL, reservation);
  }

}
