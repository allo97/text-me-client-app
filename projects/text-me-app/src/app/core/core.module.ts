import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule, MatToolbarModule, MatButtonModule],
  exports: [MainLayoutComponent],
  // providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule {}
