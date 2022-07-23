import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { ConfirmedByCountryComponent } from './components/confirmed-by-country/confirmed-by-country.component';
import { CountryChartComponent } from './components/country-chart/country-chart.component';
import { SummaryCardsComponent } from './components/summary-cards/summary-cards.component';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { TopCountriesComponent } from './components/top-countries/top-countries.component';
import { SummaryRoutingModule } from './summary-routing.module';


@NgModule({
  declarations: [
    SummaryPageComponent,
    SummaryCardsComponent,
    TopCountriesComponent,
    ConfirmedByCountryComponent,
    CountryChartComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    SharedModule,
    ChartsModule
  ]
})
export class SummaryModule { }
