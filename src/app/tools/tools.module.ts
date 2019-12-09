import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OptimizationComponent } from "./components/optimization/optimization.component";
import { SimulationComponent } from "./components/simulation/simulation.component";
import { VisualizationComponent } from "./components/visualization/visualization.component";

@NgModule({
  declarations: [
    VisualizationComponent,
    SimulationComponent,
    OptimizationComponent
  ],
  imports: [CommonModule],
  exports: [VisualizationComponent, SimulationComponent, OptimizationComponent]
})
export class ToolsModule {}
