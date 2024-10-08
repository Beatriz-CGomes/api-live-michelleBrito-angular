import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePegeable } from '../model/responsePageable.model';
import { Live } from '../model/live.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = 'http://localhost:8080/lives';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }


  public getLivesWithFlag(flag: string): Observable<ResponsePegeable> {
    return this.http.get<ResponsePegeable>(this.apiUrl + '?flag=' + flag);
  }

  public postLives(live: any): Observable<Live> {
    return this.http.post<any>(this.apiUrl, live, this.httpOptions);
  }
}
