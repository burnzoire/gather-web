import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { TopicComponent }        from './topic.component';
import { TopicListComponent }    from './topic-list.component';
import { TopicModule }           from './topic.module';

const topicRoutes: Routes = [
  { path: 'forums/:id',
    children: [
      { path: '', redirectTo: 'topics', pathMatch: 'full' },
      { path: 'topics', component: TopicListComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(topicRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TopicRoutingModule { }
