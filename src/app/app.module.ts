import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { ForumListComponent } from './forum/forum-list.component'
import { ForumService } from './forum/forum.service'
import { ApiService } from './core/api.service'
import { AuthService } from './core/auth.service'
import { AuthInterceptor } from './core/auth.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    PageNotFoundComponent,
    ForumListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }, ForumService, ApiService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
