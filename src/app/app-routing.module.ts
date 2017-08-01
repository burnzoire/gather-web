import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ForumComponent }        from './forum/forum.component';
import { ForumListComponent }    from './forum/forum-list.component';
import { AppComponent }          from './app.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'forums', component: ForumListComponent },
  { path: 'forums/:id', component: ForumComponent },
  { path: '',   redirectTo: '/forums', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
