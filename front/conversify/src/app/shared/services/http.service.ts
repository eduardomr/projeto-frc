import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  protected urlBackendApi = environment.middle_url;

  private reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'No-Auth': 'True',
  });

  constructor(private httpClient: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this.httpClient
      .get(`${this.urlBackendApi}/${endpoint}`, {
        headers: this.reqHeader,
        observe: 'response',
      })
      .pipe(map((res) => res.body as T));
  }

  post<T>(
    endpoint: string,
    body?: any,
    params?: HttpParams | { [param: string]: string | string[] }
  ): Observable<T> {
    return this.httpClient
      .post(`${this.urlBackendApi}/${endpoint}`, body, {
        headers: this.reqHeader,
        params,
        observe: 'response',
      })
      .pipe(map((res) => res.body as T));
  }

  put<T>(
    endpoint: string,
    body?: any,
    params?: HttpParams | { [param: string]: string | string[] }
  ): Observable<T> {
    return this.httpClient
      .put(`${this.urlBackendApi}/${endpoint}`, body, {
        headers: this.reqHeader,
        params,
        observe: 'response',
      })
      .pipe(map((res) => res.body as T));
  }

  patch<T>(
    endpoint: string,
    body?: any,
    params?: HttpParams | { [param: string]: string | string[] }
  ): Observable<T> {
    return this.httpClient
      .patch(`${this.urlBackendApi}/${endpoint}`, body, {
        headers: this.reqHeader,
        params,
        observe: 'response',
      })
      .pipe(map((res) => res.body as T));
  }

  delete<T>(
    endpoint: string,
    params?: HttpParams | { [param: string]: string | string[] }
  ): Observable<T> {
    return this.httpClient
      .delete(`${this.urlBackendApi}/${endpoint}`, {
        headers: this.reqHeader,
        params,
        observe: 'response',
      })
      .pipe(map((res) => res.body as T));
  }
}
