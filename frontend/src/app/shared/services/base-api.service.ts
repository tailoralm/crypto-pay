import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  protected baseUrl = 'http://localhost:3000';
  protected axios = axios;
  protected readonly userDataVar = 'user-data';

  protected getHeaders(): AxiosRequestConfig {
    const token = JSON.parse(localStorage.getItem(this.userDataVar) || '{}').token;
  
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
  }
  
  protected async get(endpoint: string) {
    const response = await axios.get(`${this.baseUrl}/${endpoint}`, this.getHeaders());
    return response.data;
  }
  
  protected async post(endpoint: string, body: any) {
    const response = await axios.post(`${this.baseUrl}/${endpoint}`, body, this.getHeaders());
    return response.data;
  }
  
  protected async put(endpoint: string, body: any) {
    const response = await axios.put(`${this.baseUrl}/${endpoint}`, body, this.getHeaders());
    return response.data;
  }
  
  protected async delete(endpoint: string) {
    const response = await axios.delete(`${this.baseUrl}/${endpoint}`, this.getHeaders());
    return response.data;
  }

  protected getUserData() {
    return JSON.parse(localStorage.getItem(this.userDataVar) || '{}');
  }
}
