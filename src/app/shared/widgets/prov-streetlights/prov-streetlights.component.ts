import { Component, Input, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

declare var require: any;
const data = require("highcharts/modules/data");
data(Highcharts);

@Component({
  selector: "app-widget-prov-streetlights",
  templateUrl: "./prov-streetlights.component.html",
  styleUrls: ["./prov-streetlights.component.scss"]
})
export class ProvStreetlightsComponent implements OnInit {
  apiUrl = "https://performance.providenceri.gov/resource/sw6f-wzuw.csv";

  @Input() data = [];

  Highcharts = Highcharts;

  public chartOptions: any = {
    chart: {
      type: "line"
    },
    // data: this.data,
    data: {
      // csvURL: this.apiUrl,
      csv:
        // tslint:disable-next-line: max-line-length
        '"Date";"kWh"\n"2009-07-24";1072823\n"2009-08-24";1297714\n"2009-09-23";1297714\n"2009-10-22";1495544\n"2009-11-20";1649227\n"2009-12-22";1925251\n"2010-01-25";2057458\n"2010-02-23";1639038\n"2010-03-25";1517911\n"2010-04-26";1433020\n"2010-05-24";1093667\n"2010-06-24";1119142\n"2010-07-26";1162189\n"2010-08-25";1211676\n"2010-09-23";1345656\n"2010-10-22";1514288\n"2010-11-22";1783216\n"2010-12-22";1819015\n"2011-01-24";2003685\n"2011-02-22";1652261\n"2011-03-23";1480231\n"2011-04-25";1494825\n"2011-05-23";1103718\n"2011-06-23";1127148\n"2011-07-25";1166758\n"2011-08-24";1213067\n"2011-09-22";1345515\n"2011-10-21";1515164\n"2011-11-22";1845160\n"2011-12-22";1827322\n"2012-01-24";2012113\n"2012-02-22";1612550\n"2012-03-23";1525943\n"2012-04-24";1453537\n"2012-05-24";1187984\n"2012-06-22";1054983\n"2012-07-25";1204539\n"2012-08-24";1215006\n"2012-09-24";1444043\n"2012-10-23";1529719\n"2012-11-21";1680481\n"2012-12-21";1827482\n"2013-01-24";2075366\n"2013-02-22";1656174\n"2013-03-22";1434885\n"2013-04-24";1504714\n"2013-05-24";1188700\n"2013-06-24";1125509\n"2013-07-25";1131894\n"2013-08-26";1296467\n"2013-09-24";1359637\n"2013-10-23";1527831\n"2013-11-21";1678415\n"2013-12-23";1947944\n"2014-01-24";1950579\n"2014-02-24";1767154\n"2014-03-25";1472011\n"2014-04-24";1356120\n"2014-05-27";1306084\n"2014-06-24";1012478\n"2014-07-24";1098700\n"2014-08-22";1171307\n"2014-09-23";1481777\n"2014-10-23";1581002\n"2014-11-21";1683686\n"2014-12-23";1954146\n"2015-01-26";2078187\n"2015-02-24";1649572\n"2015-03-25";1474442\n"2015-04-24";1356052\n"2015-05-26";1267211\n"2015-06-24";1050659\n"2015-07-24";1097399\n"2015-08-24";1252903\n"2015-09-23";1397206\n"2015-10-22";1525348\n"2015-11-20";1676738\n"2015-12-22";1938636\n"2016-01-25";2063469\n"2016-02-23";1597502\n"2016-03-24";1512629\n"2016-04-25";1438315\n"2016-05-27";1257327\n"2016-06-24";1024455',
      googleSpreadsheetKey: false,
      googleSpreadsheetWorksheet: false
    },
    seriesMapping: [
      {
        x: 0,
        y: 1
      }
    ],
    title: {
      text: "Providence, RI Monthly Streetlight Electricity Usage"
    },
    subtitle: {
      text:
        'source: <a href="http://OpenPVD.com" target="_blank">OpenPVD.com</a>'
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false
        }
      },
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
        animation: true
      }
    },
    exporting: {},
    credits: {
      text: "cloud.highcharts.com",
      href: '"https://cloud.highcharts.com" target="_blank"'
    },
    caption: {
      text:
        // tslint:disable-next-line: max-line-length
        "Chart of Monthly Streetlight Electricity Usage for Providence, RI.\n Data provided by https://performance.providenceri.gov/Sustainability/Monthly-Streetlight-Electricity-Usage/sw6f-wzuw\n"
    },
    yAxis: {
      title: {
        text: "kWh"
      }
    },
    xAxis: {
      type: "category"
    }
  };

  constructor() {}

  ngOnInit() {
    Highcharts.chart("prov-streetlights", this.chartOptions);
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
}
