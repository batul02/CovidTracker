import { Component, OnInit } from '@angular/core';

import * as worldMap from '@highcharts/map-collection/custom/world.geo.json';
import * as Highcharts from 'highcharts/highmaps';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-live-page',
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.css']
})
export class LivePageComponent implements OnInit {

  liveData: any[] = [];

  constructor(private dataService: DataService) { }

  Highcharts: typeof Highcharts = Highcharts;
  chartconstructor = 'mapChart';

  chartOptions: Highcharts.Options | any = {
    chart: {
      map: worldMap
    },
    title: {
      text: 'Covid 19 World Data'
    },
    subtitle: {
      text: 'Confirmed Cases'
    },
    mapNavigation: {
      enable: true,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    legend: {
      enabled: true
    },
    colorAxis: {
      min: 0
    },
    series: [{
      type:  'map',
      name: 'COVID-19 Data',
      states: {
        hover: {
          color: '#dc3545'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      },
      allAreas: false,
      data: []
    }]
  }

  ngOnInit(): void {
    this.dataService.getSummaryData()
      .subscribe(
        (data: any) => {
          this.liveData = data.Countries.map((country: any) => [country.CountryCode.toLowerCase(), country.TotalConfirmed]);
          this.chartOptions.series[0].data = this.liveData;
          this.Highcharts.mapChart('container', this.chartOptions);
        },
        (error: any) => {
          console.log(error);
        }
      )
  }

}
