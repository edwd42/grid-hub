import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { AboutComponent } from "./modules/about/about.component";
import { HomeComponent } from "./modules/home/home.component";
import { PageNotFoundComponent } from "./modules/page-not-found/page-not-found.component";
import { OptimizationComponent } from "./shared/components/optimization/optimization.component";
import { SimulationComponent } from "./shared/components/simulation/simulation.component";
import { KwhSimComponent } from "./shared/widgets/kwh-sim/kwh-sim.component";
import { OptimizeWidgetComponent } from "./shared/widgets/optimize-widget/optimize-widget.component";
import { Plotly144Component } from "./shared/widgets/plotly144/plotly144.component";
import { ProvStreetlightsComponent } from "./shared/widgets/prov-streetlights/prov-streetlights.component";
import { Pyplot1Component } from "./shared/widgets/pyplot1/pyplot1.component";
import { VisualizationComponent } from "./tools/components/visualization/visualization.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      { path: "visualization", component: VisualizationComponent },
      { path: "simulation", component: SimulationComponent },
      { path: "optimization", component: OptimizationComponent },
      { path: "prov-streetlights", component: ProvStreetlightsComponent },
      { path: "plotly144", component: Plotly144Component },
      { path: "pyplot1", component: Pyplot1Component },
      { path: "kwh-sim", component: KwhSimComponent },
      { path: "optimize-widget", component: OptimizeWidgetComponent },

      { path: "**", component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

//
