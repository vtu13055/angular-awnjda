import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServerStatus } from './serverstatus/serverstatus.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, ServerStatus],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
