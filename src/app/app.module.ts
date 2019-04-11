import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    routes,
    HttpClientModule,
    FormsModule
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiService
    ],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
