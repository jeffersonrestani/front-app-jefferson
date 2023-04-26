import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CutomerComponent } from './customer/customer.component';
import { CutomerService } from './customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CutomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    MatDividerModule
  ],
  providers: [
    CutomerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
