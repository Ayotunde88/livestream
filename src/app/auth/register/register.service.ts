import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../models/auth/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl: string = 'http://localhost:5000/register';

  constructor(private http: HttpClient) { }

  // Method to register a user
  registerUser(user: User): Observable<any> {
    return this.http.post(this.baseUrl, user); 
  }
}
