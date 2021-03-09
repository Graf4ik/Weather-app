import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CountryComponent } from './Components/country/country.component';
import { MainComponent } from './Components/main/main.component';
import { WeatherItemComponent } from './Components/main/weather-item/weather-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountryComponent,
    MainComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
