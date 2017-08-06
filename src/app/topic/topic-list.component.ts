import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { TopicService } from './topic.service';
import { Forum } from '../forum/forum';
import { Topic } from './topic';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  forum: Forum;
  topics: Topic[];

  constructor(
    private service: TopicService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getTopicsForForum(params.get('id')))
      .subscribe((topics: Topic[]) => this.topics = topics);
  }

}
