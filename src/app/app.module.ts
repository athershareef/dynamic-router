import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {HttpClientModule} from '@angular/common/http';
import {NextComponent} from './next/next.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './routes/routing.module';
import {DataService} from './services/data.service';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoadingBarModule.forRoot(),
    RouterModule,
    AppRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
