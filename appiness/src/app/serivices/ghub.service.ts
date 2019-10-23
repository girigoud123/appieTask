import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GhubService {

  constructor(private http:HttpClient) { }

gethub():Observable<any>{
 return this.http.get("https://api.github.com/users/wycats/repos");
}
}
