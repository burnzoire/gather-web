import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';

import { ForumComponent }        from './forum.component';
import { ForumListComponent }    from './forum-list.component';

import { ForumService }          from './forum.service'

import { ForumRoutingModule }    from './forum-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ForumRoutingModule
  ],
  declarations: [
    ForumListComponent,
    ForumComponent
  ],
  providers: [
    ForumService
  ]
})
export class ForumModule { }
