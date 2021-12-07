import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ReservationDetail} from '../model/Reservation-detail';
import {RESERVATION_DETAIL_API_URL} from '../api-urls';

@Injectable({
  providedIn: 'root'
})
export class ReservationDetailService {

  constructor(private httpClient: HttpClient) { }

  findReservationDetailByReservation(id: any): Observable<ReservationDetail[]> {
    return this.httpClient.get<ReservationDetail[]>(`${RESERVATION_DETAIL_API_URL}/${id}`);
  }
}
