import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { AboutComponent } from "./modules/about/about.component";
// import { ChartComponent } from './modules/chart/chart.component';
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { PageNotFoundComponent } from "./modules/page-not-found/page-not-found.component";
import { SimulationComponent } from "./shared/widgets/simulation/simulation.component";

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
      { path: "simulation", component: SimulationComponent },
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
