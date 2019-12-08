import { Component, Input, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import * as $ from 'jquery';
// import { ChartModule } from 'highcharts-angular';

@Component({
  selector: "app-widget-prov-streetlights",
  templateUrl: "./prov-streetlights.component.html",
  styleUrls: ["./prov-streetlights.component.scss"]
})
export class ProvStreetlightsComponent implements OnInit {
  apiUrl = "https://performance.providenceri.gov/resource/sw6f-wzuw.csv";

  @Input() data: any = [];

  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {}

  public options: any = {
    chart: {
      scrollablePlotArea: {
        minWidth: 700
      },
      zoomType: "xy"
    },

    // data: {
    //   csvURL: "https://performance.providenceri.gov/resource/sw6f-wzuw.csv",
    //   beforeParse: function(csv) {
    //     // console.log(this.data.query.results[0]);
    //     return csv.replace(/\n\n/g, "\n");
    //   }
    // },
    title: {
      text: "Providence, RI Monthly Streetlight Electricity Usage (kWh)"
    },
    subtitle: {
      text: "Source: OpenPVD.com"
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
        states: {
          hover: {
            color: "#a4edba"
          },
          select: {
            color: "#EFFFEF",
            borderColor: "black",
            dashStyle: "dot"
          }
        },
        cursor: "pointer",
        marker: {
          lineWidth: 1
        },
        animation: false
      }
    },
    exporting: {},
    credits: {
      text: "cloud.highcharts.com",
      href: "https://cloud.highcharts.com"
    },
    xAxis: {
      tickInterval: 604800000,
      tickWidth: 0,
      gridLineWidth: 1,
      labels: {
        align: "left",
        x: 3,
        y: -3
      },
      type: "datetime"
    },
    yAxis: [
      {
        title: {
          text: "kWh"
        },
        labels: {
          align: "left",
          x: 3,
          y: 16,
          format: "{value:.,0f}"
        },
        showFirstLabel: false,
        index: 0,
        opposite: false,
        reversed: false
      },
      {
        linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
          text: null
        },
        labels: {
          align: "right",
          x: -3,
          y: 16,
          format: "{value:.,0f}"
        },
        showFirstLabel: false,
        index: 1
      }
    ],
    legend: {
      align: "left",
      verticalAlign: "top",
      borderWidth: 0
    },
    tooltip: {
      shared: true,
      crosshairs: true,
      valueSuffix: " kWh"
    },
    series: [
      {
        turboThreshold: 0,
        _colorIndex: 0,
        _symbolIndex: 0
      },
      {
        turboThreshold: 0,
        _colorIndex: 1,
        _symbolIndex: 0
      },
      {
        data: (function() {
          var data;
          $.ajax({
            url: "https://performance.providenceri.gov/resource/sw6f-wzuw.csv",
            data: query,
            async: false,
            content: "application/json",
            type: "POST",
            success: function(point) {
              data = point.queries[0].results[0].values;
            }
          });
          return data;
        })()
      }
    ],
    lang: {
      thousandsSep: " ,"
    },
    caption: {
      text:
        "Chart of streetlight usage in kWh for the City of Providence, RI\nData from https://performance.providenceri.gov/Sustainability/Monthly-Streetlight-Electricity-Usage/sw6f-wzuw\n"
    },
    stockTools: {
      gui: {
        buttons: ["simpleShapes", "lines", "crookedLines"],
        enabled: false
      }
    },
    navigation: {
      events: {
        showPopup:
          'function(e){this.chart.indicatorsPopupContainer||(this.chart.indicatorsPopupContainer=document.getElementsByClassName("highcharts-popup-indicators")[0]),this.chart.annotationsPopupContainer||(this.chart.annotationsPopupContainer=document.getElementsByClassName("highcharts-popup-annotations")[0]),"indicators"===e.formType?this.chart.indicatorsPopupContainer.style.display="block":"annotation-toolbar"===e.formType&&(this.chart.activeButton||(this.chart.currentAnnotation=e.annotation,this.chart.annotationsPopupContainer.style.display="block")),this.popup&&(c=this.popup)}',
        closePopup:
          'function(){this.chart.annotationsPopupContainer.style.display="none",this.chart.currentAnnotation=null}',
        selectButton:
          'function(e){var t=e.button.className+" highcharts-active";e.button.classList.contains("highcharts-active")||(e.button.className=t,this.chart.activeButton=e.button)}',
        deselectButton:
          'function(e){e.button.classList.remove("highcharts-active"),this.chart.activeButton=null}'
      },
      bindingsClassName: "tools-container"
    },
    annotations: []
  };

  // HC_exporting(Highcharts);

  // setTimeout(() => {
  //   window.dispatchEvent(new Event("resize"));
  // }, 300);

  ngOnInit() {
    Highcharts.chart("container", this.options);
  }
}
