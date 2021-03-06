import { Component, Input, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-widget-pie",
  templateUrl: "./pie.component.html",
  styleUrls: ["./pie.component.scss"]
})
export class PieComponent implements OnInit {
  @Input() data = [];
  Highcharts = Highcharts;
  chartOptions = {};

  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie"
      },
      title: {
        text: "Projected 2050 World Population by Percent"
      },
      subtitle: {
        text: "Source: Wikipedia.org"
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      plotOptions: {
        pie: {
          size: 200,
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %"
          }
        }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: "Brands",
          colorByPoint: true,
          data: this.data
        }
      ]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
}
