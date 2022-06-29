import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "User/login";

  constructor(private http: HttpClient) { }

  
  public login(username: string, password: string){

    return this.http.post(`${environment.apiUrl}/${this.url}`,{
      username,
      password
    },
    {
      responseType: 'text'
    }
    
  )} 
}
