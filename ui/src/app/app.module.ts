import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { InsideWeatherComponent } from './inside-weather/inside-weather.component';
import { OutsideWeatherComponent } from './outside-weather/outside-weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FahrenheitPipe } from './pipes/fahrenheit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    InsideWeatherComponent,
    OutsideWeatherComponent,
    FahrenheitPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatSlideToggleModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
