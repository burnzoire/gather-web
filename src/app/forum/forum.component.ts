import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { Forum } from './forum'
import { ForumService } from './forum.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})

export class ForumComponent implements OnInit {
  forum : Forum;
  id: number = 1;

  constructor(
    private service: ForumService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getForum(params.get('id')))
      .subscribe((forum: Forum) => this.forum = forum);
  }

  gotoForums() {
    this.router.navigate(['/forums']);
  }

}
