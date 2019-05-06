import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = 'Http://localhost:5000/api/auth/';

constructor(private http: HttpClient) { }

login(model: any) {
  return this.http.post(this.baseURL + 'Login', model).pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
      }
    })
  );
}

}
