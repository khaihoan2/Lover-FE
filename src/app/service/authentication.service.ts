import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AUTH_API_URL} from '../api-urls';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserToken} from '../model/user-token';
import {Router} from '@angular/router';
import {NotificationService} from './notification/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUserSubject: BehaviorSubject<UserToken>;

  public currentUser: Observable<UserToken>;

  userToken: UserToken = {};

  constructor(private httpClient: HttpClient,
              private notificationService: NotificationService,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('userToken')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string) {
    this.httpClient.post(`${AUTH_API_URL}/login`, {username, password})
      .subscribe(data => {
        this.userToken = data;
        localStorage.setItem('userToken', JSON.stringify(this.userToken));
        this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('userToken')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.router.navigate(['']);
      }, error => this.notificationService.notify('error', 'Incorrect account or password'));
  }

  logout(): Observable<any> {
    localStorage.removeItem('userToken');
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('userToken')));
    this.currentUser = this.currentUserSubject.asObservable();
    return this.currentUser;
  }

  get currentUserValue() {
    return this.currentUserSubject.value;
  }

  set setCurrenUserValue(currentUserSubject: BehaviorSubject<UserToken>) {
    this.currentUserSubject = currentUserSubject;
  }
}
