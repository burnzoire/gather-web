import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { Forum } from './forum'
import { ForumService } from './forum.service'

@Component({
  selector: 'forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})

export class ForumComponent implements OnInit {
  forum : Forum;
  service: ForumService;
  id: number = 1;

  constructor(@Inject(ForumService) service) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getForum(this.id).subscribe(
      (forum) => this.forum = forum
    )
  }

}
