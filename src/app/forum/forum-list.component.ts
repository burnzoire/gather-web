import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Forum } from './forum'
import { ForumService } from './forum.service'

@Component({
  selector: 'forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})

export class ForumListComponent implements OnInit {
  forums : Observable<Forum[]>;

  private selectedId: number;

  constructor(
    private service: ForumService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.forums = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getForums();
      });
  }

  onSelect(forum: Forum) {
    this.router.navigate(['/forums', forum.id]);
  }

  isSelected(forum: Forum) {
    return forum.id === this.selectedId;
  }


}
