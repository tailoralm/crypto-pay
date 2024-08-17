import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  protected baseUrl = 'http://localhost:3000';

  constructor(protected http: HttpClient) {}

  protected getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');

    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  protected get<T>(endpoint: string) {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, {
      headers: this.getHeaders(),
    });
  }

  protected post<T>(endpoint: string, body: any) {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body, {
      headers: this.getHeaders(),
    });
  }

  protected put<T>(endpoint: string, body: any) {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body, {
      headers: this.getHeaders(),
    });
  }

  protected delete<T>(endpoint: string, body: any) {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, {
      headers: this.getHeaders(),
    });
  }
}
