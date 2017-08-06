import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopicModule } from './topic/topic.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ApiService } from './core/api.service'
import { AuthService } from './core/auth.service'
import { AuthInterceptor } from './core/auth.interceptor';
import { TopicNavComponent } from './topic/topic-nav.component';
import { TopicListComponent } from './topic/topic-list.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TopicModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TopicNavComponent,
    TopicListComponent,
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }, ApiService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
