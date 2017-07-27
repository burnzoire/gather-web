import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Forum } from './forum'
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../core/api.service';

@Injectable()
export class ForumService {
  api: ApiService;

  constructor(private http: HttpClient, @Inject(ApiService) apiService) {
    this.api = apiService;
  }

  getForums(): Observable<Forum[]> {
    return this.http.get<Forum[]>(this.api.getHost() + '/forum/')
  }

  getForum(id): Observable<Forum> {
    return this.http.get<Forum>(this.api.getHost() + '/forum/' + id)
  }

}
