import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public URL: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  public getUserDetails () {
    return this.http.get( this.URL + '/users')
  }

  public getUserByID(id:number) {
    return this.http.get( this.URL + '/users/' + id )
  }
}
