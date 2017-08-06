import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './topic.component';
import { ForumService } from '../forum/forum.service';
import { TopicService } from './topic.service';

import { TopicRoutingModule } from './topic-routing.module'

@NgModule({
  imports: [
    CommonModule,
    TopicRoutingModule
  ],
  declarations: [
    TopicComponent
  ],
  providers: [
    ForumService,
    TopicService
  ]
})
export class TopicModule { }
