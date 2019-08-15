import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  postData(url, object) {
    return this.http.post(this.baseUrl + url, object);
  }

  getData(url, object) {
    return this.http.get(this.baseUrl + url, object);
  }

  deleteData(url, object) {
    return this.http.delete(this.baseUrl + url, object);
  }

  updateData(url, object) {
    return this.http.put(this.baseUrl + url, object);
  }

}
