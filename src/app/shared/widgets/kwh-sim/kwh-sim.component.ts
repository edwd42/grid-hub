import { Component, Input, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

declare var require: any;
const data = require("highcharts/modules/data");
data(Highcharts);

@Component({
  selector: "app-widget-kwh-sim",
  templateUrl: "./kwh-sim.component.html",
  styleUrls: ["./kwh-sim.component.scss"]
})
export class KwhSimComponent implements OnInit {
  apiUrl = "https://performance.providenceri.gov/resource/sw6f-wzuw.csv";

  @Input() data = [];

  Highcharts = Highcharts;

  public chartOptions: any = {
    title: {
      text: "50% Simulation - Monthly Streetlight Electricity Usage"
    },
    subtitle: {
      text: "source: OpenPVD.com"
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
        animation: false
      }
    },
    exporting: {},
    credits: {
      text: "cloud.highcharts.com",
      href: "https://cloud.highcharts.com"
    },
    chart: {},
    series: [
      {
        turboThreshold: 0,
        _colorIndex: 0,
        _symbolIndex: 0,
        type: "line",
        marker: {
          enabled: false
        }
      },
      {
        turboThreshold: 0,
        _colorIndex: 1,
        _symbolIndex: 0,
        type: "line"
      }
    ],
    data: {
      csv:
        '"Date";"kWh";"50% kWh"\n"2009-07-24";1072823;536412\n"2009-08-24";1297714;648857\n"2009-09-23";1297714;648857\n"2009-10-22";1495544;747772\n"2009-11-20";1649227;824614\n"2009-12-22";1925251;962626\n"2010-01-25";2057458;1028729\n"2010-02-23";1639038;819519\n"2010-03-25";1517911;758956\n"2010-04-26";1433020;716510\n"2010-05-24";1093667;546834\n"2010-06-24";1119142;559571\n"2010-07-26";1162189;581095\n"2010-08-25";1211676;605838\n"2010-09-23";1345656;672828\n"2010-10-22";1514288;757144\n"2010-11-22";1783216;891608\n"2010-12-22";1819015;909508\n"2011-01-24";2003685;1001843\n"2011-02-22";1652261;826131\n"2011-03-23";1480231;740116\n"2011-04-25";1494825;747413\n"2011-05-23";1103718;551859\n"2011-06-23";1127148;563574\n"2011-07-25";1166758;583379\n"2011-08-24";1213067;606534\n"2011-09-22";1345515;672758\n"2011-10-21";1515164;757582\n"2011-11-22";1845160;922580\n"2011-12-22";1827322;913661\n"2012-01-24";2012113;1006057\n"2012-02-22";1612550;806275\n"2012-03-23";1525943;762972\n"2012-04-24";1453537;726769\n"2012-05-24";1187984;593992\n"2012-06-22";1054983;527492\n"2012-07-25";1204539;602270\n"2012-08-24";1215006;607503\n"2012-09-24";1444043;722022\n"2012-10-23";1529719;764860\n"2012-11-21";1680481;840241\n"2012-12-21";1827482;913741\n"2013-01-24";2075366;1037683\n"2013-02-22";1656174;828087\n"2013-03-22";1434885;717443\n"2013-04-24";1504714;752357\n"2013-05-24";1188700;594350\n"2013-06-24";1125509;562755\n"2013-07-25";1131894;565947\n"2013-08-26";1296467;648234\n"2013-09-24";1359637;679819\n"2013-10-23";1527831;763916\n"2013-11-21";1678415;839208\n"2013-12-23";1947944;973972\n"2014-01-24";1950579;975290\n"2014-02-24";1767154;883577\n"2014-03-25";1472011;736006\n"2014-04-24";1356120;678060\n"2014-05-27";1306084;653042\n"2014-06-24";1012478;506239\n"2014-07-24";1098700;549350\n"2014-08-22";1171307;585654\n"2014-09-23";1481777;740889\n"2014-10-23";1581002;790501\n"2014-11-21";1683686;841843\n"2014-12-23";1954146;977073\n"2015-01-26";2078187;1039094\n"2015-02-24";1649572;824786\n"2015-03-25";1474442;737221\n"2015-04-24";1356052;678026\n"2015-05-26";1267211;633606\n"2015-06-24";1050659;525330\n"2015-07-24";1097399;548700\n"2015-08-24";1252903;626452\n"2015-09-23";1397206;698603\n"2015-10-22";1525348;762674\n"2015-11-20";1676738;838369\n"2015-12-22";1938636;969318\n"2016-01-25";2063469;1031735\n"2016-02-23";1597502;798751\n"2016-03-24";1512629;756315\n"2016-04-25";1438315;719158\n"2016-05-27";1257327;628664\n"2016-06-24";1024455;512228',
      googleSpreadsheetKey: false,
      googleSpreadsheetWorksheet: false,
      seriesMapping: [
        {
          x: 0,
          y: 1
        },
        {
          x: 0,
          y: 2
        }
      ]
    },
    caption: {
      text:
        "Chart of 50% reduction of monthly streetlight electricity u\nsage for Providence, RI \nData provided by https://performance.providenceri.gov/Sustainability/Monthly-Streetlight-Electricity-Usage/sw6f-wzuw\n"
    },
    yAxis: {
      title: {
        text: "kWh"
      }
    },
    xAxis: {
      type: "category"
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

  constructor() {}

  ngOnInit() {
    Highcharts.chart("simulation", this.chartOptions);
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }
}
