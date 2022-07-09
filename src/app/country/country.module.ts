import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CountryPageComponent } from './components/country-page/country-page.component';
import { CountryRoutingModule } from './country-routing.module';
import { DataTableComponent } from './components/data-table/data-table.component';


@NgModule({
  declarations: [
    CountryPageComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    SharedModule
  ]
})
export class CountryModule { }
