import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Employee } from '../model/platinum.model';

@Injectable({
  providedIn: 'root'
})
export class PlatinumService {
  baseApiUrl: string = environment.baseApiUrl; 
  constructor(private http: HttpClient) { }

  // Get All Users 
  getAllUsers(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/Platinum')
  }
}
