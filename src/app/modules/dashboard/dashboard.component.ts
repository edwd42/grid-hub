import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { DashboardService } from "../dashboard.service";

export interface WorldPopulation {
  name: string;
  position: number;
  y1750: number;
  y1850: number;
  y1950: number;
  y2050: number;
}

const WORLD_POPULATION_DATA: WorldPopulation[] = [
  {
    position: 1,
    name: "Asia",
    y1750: 502,
    y1850: 809,
    y1950: 1402,
    y2050: 5268
  },
  {
    position: 2,
    name: "Africa",
    y1750: 106,
    y1850: 111,
    y1950: 221,
    y2050: 1766
  },
  {
    position: 3,
    name: "Europe",
    y1750: 163,
    y1850: 276,
    y1950: 547,
    y2050: 628
  },
  {
    position: 4,
    name: "America",
    y1750: 18,
    y1850: 54,
    y1950: 339,
    y2050: 1201
  },
  { position: 5, name: "Oceania", y1750: 2, y1850: 2, y1950: 30, y2050: 46 }
];

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  bigChart = [];
  cards = [];
  solar = [];
  bicycleMiles = [];
  recycling = [];
  trees = [];
  pieChart = [];
  provStreetlights = [];

  displayedColumns: string[] = [
    "position",
    "name",
    "y1750",
    "y1850",
    "y1950",
    "y2050"
  ];
  dataSource = new MatTableDataSource<WorldPopulation>(WORLD_POPULATION_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.solar = this.dashboardService.solar();
    this.bicycleMiles = this.dashboardService.bicycleMiles();
    this.recycling = this.dashboardService.recycling();
    this.trees = this.dashboardService.trees();
    this.pieChart = this.dashboardService.pieChart();
    this.provStreetlights = this.dashboardService.provStreetlights();

    this.dataSource.paginator = this.paginator;
  }
}
