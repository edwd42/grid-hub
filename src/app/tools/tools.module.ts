import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule, MatIconModule } from "@angular/material";
import { HighchartsChartModule } from "highcharts-angular";
import { VisualizationComponent } from "./components/visualization/visualization.component";

@NgModule({
  declarations: [
    VisualizationComponent
    // SimulationComponent
    // OptimizationComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [
    VisualizationComponent
    // SimulationComponent
    // OptimizationComponent
  ]
})
export class ToolsModule {}
