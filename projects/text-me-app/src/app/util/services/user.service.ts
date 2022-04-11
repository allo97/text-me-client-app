import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/text-me-app/src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  public get(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  public create(user: User): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/users`, user);
  }

  public update(user: User): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/users`, user);
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${id}`);
  }
}
