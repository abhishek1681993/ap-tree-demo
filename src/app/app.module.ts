import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApTreeModule } from 'ap-tree';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApTreeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
