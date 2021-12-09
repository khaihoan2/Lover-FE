import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Feedback} from '../model/feedback';
import {FEEDBACK_API_URL} from '../api-urls';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbackUrl = FEEDBACK_API_URL;

  constructor(private http: HttpClient) {
  }

  getAllFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.feedbackUrl);
  }

  saveFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(this.feedbackUrl, feedback);
  }

  editFeedback(id: number, feedback: Feedback) {
    return this.http.put(this.feedbackUrl + `/${id}`, feedback);
  }

  getByIdFeedback(id: number): Observable<Feedback> {
    return this.http.get(this.feedbackUrl + `/${id}`);
  }

  deleteFeedback(id: number): Observable<Feedback> {
    return this.http.delete(this.feedbackUrl + `/${id}`);
  }

  findByReservationId(id: any): Observable<Feedback> {
    return this.http.get(`${this.feedbackUrl}/reservation/${id}`);
  }
}
