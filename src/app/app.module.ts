import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { ForumService } from './forum/forum.service'
import { ApiService } from './core/api.service'
import { AuthService } from './core/auth.service'
import { AuthInterceptor } from './core/auth.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }, ForumService, ApiService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
