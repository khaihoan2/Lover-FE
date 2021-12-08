import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Feedback} from '../model/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private baseUrl = 'http://localhost:8080/api/feedbacks';

  constructor(private http: HttpClient) {
  }

  getAllFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.baseUrl);
  }

  saveFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(this.baseUrl, feedback);
  }

  editFeedback(id: number, feedback: Feedback) {
    return this.http.put(this.baseUrl + `/${id}`, feedback);
  }

  getByIdFeedback(id: number): Observable<Feedback> {
    return this.http.get(this.baseUrl + `/${id}`);
  }

  deleteFeedback(id: number): Observable<Feedback> {
    return this.http.delete(this.baseUrl + `/${id}`);
  }
}
