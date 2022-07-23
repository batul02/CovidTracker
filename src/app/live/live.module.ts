import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HighchartsChartModule } from 'highcharts-angular';
import { LivePageComponent } from './components/live-page/live-page.component';
import { LiveRoutingModule } from './live-routing.module';


@NgModule({
  declarations: [
    LivePageComponent
  ],
  imports: [
    CommonModule,
    LiveRoutingModule,
    HighchartsChartModule
  ]
})
export class LiveModule { }
