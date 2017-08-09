import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Forum } from '../forum/forum'
import { ForumService } from '../forum/forum.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'topic-nav',
  templateUrl: './topic-nav.component.html',
  styleUrls: ['./topic-nav.component.css']
})

export class TopicNavComponent implements OnInit {

  forums : Forum[];

  constructor(
    private router: Router,
    private service: ForumService,
  ) { }

  ngOnInit() {
    this.service.getForums().subscribe(
      (forums) => this.forums = forums
    );
  }

  navigateToForumTopics(forum) {
    this.router.navigate(['/forums', forum.id, 'topics']);
  }

}
