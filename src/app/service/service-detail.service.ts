import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServiceDetail} from '../model/service-detail';
import {SERVICE_DETAIL_API_URL} from '../api-urls';

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailService {

  constructor(private httpClient: HttpClient) { }

  findAllByUserId(userId: any): Observable<ServiceDetail[]> {
    return this.httpClient.get<ServiceDetail[]>(`${SERVICE_DETAIL_API_URL}/buyer/${userId}`);
  }
}
