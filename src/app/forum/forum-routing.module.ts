import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ForumComponent }        from './forum.component';
import { ForumListComponent }    from './forum-list.component';

const forumRoutes: Routes = [
  { path: 'forums', component: ForumListComponent },
  { path: 'forums/:id', component: ForumComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(forumRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ForumRoutingModule { }
