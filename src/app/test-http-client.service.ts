import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestHttpClientService {

  url:string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) {

   }

   getDataFromApi () {
    const res = this.http.get(this.url);
    console.log("Call from Test.service: ", res);
    return res;
   }

}
