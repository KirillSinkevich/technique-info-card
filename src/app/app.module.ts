import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IconModule} from "./modules/icon/icon.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    BrowserAnimationsModule,
    IconModule,
    HttpClientModule
  ],
  providers: [ ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
