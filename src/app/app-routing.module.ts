import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { AboutComponent } from "./modules/about/about.component";
// import { ChartComponent } from './modules/chart/chart.component';
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { PageNotFoundComponent } from "./modules/page-not-found/page-not-found.component";
import { OptimizationComponent } from "./tools/components/optimization/optimization.component";
import { SimulationComponent } from "./tools/components/simulation/simulation.component";
import { VisualizationComponent } from "./tools/components/visualization/visualization.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      { path: "visualization", component: VisualizationComponent },
      { path: "simulation", component: SimulationComponent },
      { path: "optimization", component: OptimizationComponent },
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
