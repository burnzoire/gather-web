import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Topic } from './topic'
import { Forum } from '../forum/forum'

import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../core/api.service';

@Injectable()
export class TopicService {
  api: ApiService;

  constructor(private http: HttpClient, @Inject(ApiService) apiService) {
    this.api = apiService;
  }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.api.getHost() + '/topics/')
  }

  getTopicsForForum(id): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.api.getHost() + '/forums/' + id + '/topics')
  }

  getTopic(id): Observable<Topic> {
    return this.http.get<Topic>(this.api.getHost() + '/topics/' + id)
  }

}
