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
import { KwhSimComponent } from "./widgets/kwh-sim/kwh-sim.component";
import { OptimizeWidgetComponent } from "./widgets/optimize-widget/optimize-widget.component";
import { PieComponent } from "./widgets/pie/pie.component";
import { Plotly144Component } from "./widgets/plotly144/plotly144.component";
import { ProvStreetlightsComponent } from "./widgets/prov-streetlights/prov-streetlights.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    PieComponent,
    Plotly144Component,
    ProvStreetlightsComponent,
    KwhSimComponent,
    OptimizeWidgetComponent,
    CardComponent
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
    PieComponent,
    Plotly144Component,
    ProvStreetlightsComponent,
    KwhSimComponent,
    OptimizeWidgetComponent,
    CardComponent
  ]
})
export class SharedModule {}
