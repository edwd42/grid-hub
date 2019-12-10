import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { HighchartsChartModule } from "highcharts-angular";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { AreaComponent } from "./widgets/area/area.component";
import { CardComponent } from "./widgets/card/card.component";
// import { OptimizationComponent } from "./widgets/optimization/optimization.component";
import { PieComponent } from "./widgets/pie/pie.component";
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
// import { ProvStreetlightsComponent } from "./widgets/prov-streetlights/prov-streetlights.component";
// import { SimulationComponent } from "./widgets/simulation/simulation.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    SidebarNavComponent
    // ProvStreetlightsComponent,
    // SimulationComponent,
    // OptimizationComponent
    // OptimizeWidgetComponent
    // KwhSimComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent
    // ProvStreetlightsComponent,
    // SimulationComponent
    // OptimizationComponent
  ]
})
export class SharedModule {}
