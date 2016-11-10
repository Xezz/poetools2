import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import {LevelService} from "./services/level.service";
import {AreaDataService} from "./services/area-data.service.ts";
import {MapService} from "./services/map.service";
import { ExpCalcComponent } from './exp-calc/exp-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpCalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [LevelService, AreaDataService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
