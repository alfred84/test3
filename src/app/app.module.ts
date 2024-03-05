import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PeopleService } from './services/people.service';

const searchConfig = 4;

@NgModule({
  declarations: [
    AppComponent      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [PeopleService,
    { provide: 'config', useValue: searchConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
