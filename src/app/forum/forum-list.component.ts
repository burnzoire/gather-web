import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { Forum } from './forum'
import { ForumService } from './forum.service'

@Component({
  selector: 'forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})

export class ForumListComponent implements OnInit {
  forums : Forum[];
  service: ForumService;
  id: number = 1;

  constructor(@Inject(ForumService) service) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getForums().subscribe(
      (forums) => this.forums = forums
    )
  }

}
