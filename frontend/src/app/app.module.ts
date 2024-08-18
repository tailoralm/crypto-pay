// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { ViewsModule } from './views/views.module';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterOutlet,
    BrowserModule,
    CoreModule,
    ViewsModule,
    AppRoutingModule, // For the root routes
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
