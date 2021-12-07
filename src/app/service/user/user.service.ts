import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {AUTH_API_URL, USER_API_URL} from '../../api-urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(USER_API_URL);
  }

  findById(id: number): Observable<User> {
    return this.httpClient.get<User>(USER_API_URL + `/${id}`);
  }

  addNew(user: User): Observable<User> {
    return this.httpClient.post<User>(USER_API_URL, user);
  }

  edit(user: User, id: number): Observable<User> {
    return this.httpClient.put<User>(USER_API_URL + `/${id}`, user);
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(USER_API_URL + `/${id}`);
  }

  findByUsername(username: string): Observable<any> {
    return this.httpClient.get(`${USER_API_URL}/checkUsername/${username}`);
  }

  register(user: User): Observable<any> {
    return this.httpClient.post(`${AUTH_API_URL}/register`, user);
  }

  findUserByJoinedAtDesc(page: number): Observable<any> {
    return this.httpClient.get(`${USER_API_URL}/gallery?page=${page}`);
  }

  findUserHighestRanking(): Observable<any> {
    return this.httpClient.get(`${USER_API_URL}/rating`);
  }

  findUserLimitFemaleLimitMale(): Observable<any> {
    return this.httpClient.get(`${USER_API_URL}/ratingLimitFemaleLimitMale`);
  }

  findUserSuitable(): Observable<any> {
    return this.httpClient.get(`${USER_API_URL}/suitableProposal`);
  }
}
