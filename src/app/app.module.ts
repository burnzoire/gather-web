import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ForumModule } from './forum/forum.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ApiService } from './core/api.service'
import { AuthService } from './core/auth.service'
import { AuthInterceptor } from './core/auth.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ForumModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }, ApiService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
