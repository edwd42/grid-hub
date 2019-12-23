import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";
import {
  FaIconLibrary,
  FontAwesomeModule
} from "@fortawesome/angular-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faFile,
  faFileAlt,
  faGlobe,
  faPhoneAlt,
  faUser,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";
import { HighchartsChartModule } from "highcharts-angular";
import { ContactComponent } from "../modules/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { OptimizationComponent } from "./components/optimization/optimization.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SimulationComponent } from "./components/simulation/simulation.component";
import { VisualizationComponent } from "./components/visualization/visualization.component";
import { ExternalLinkDirective } from "./external-link.directive";
import { MaterialModule } from "./material/material.module";
import { AreaComponent } from "./widgets/area/area.component";
import { CardComponent } from "./widgets/card/card.component";
import { KwhSimComponent } from "./widgets/kwh-sim/kwh-sim.component";
import { LeafletLayersComponent } from "./widgets/leaflet-layers/leaflet-layers.component";
import { OptimizeWidgetComponent } from "./widgets/optimize-widget/optimize-widget.component";
import { PieComponent } from "./widgets/pie/pie.component";
import { Plotly144Component } from "./widgets/plotly144/plotly144.component";
import { ProvStreetlightsComponent } from "./widgets/prov-streetlights/prov-streetlights.component";
import { Pyplot1Component } from "./widgets/pyplot1/pyplot1.component";

@NgModule({
  declarations: [
    ExternalLinkDirective,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContactComponent,
    AreaComponent,
    PieComponent,
    Plotly144Component,
    Pyplot1Component,
    LeafletLayersComponent,
    VisualizationComponent,
    ProvStreetlightsComponent,
    SimulationComponent,
    OptimizationComponent,
    KwhSimComponent,
    OptimizeWidgetComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    FontAwesomeModule,
    HighchartsChartModule
  ],
  exports: [
    ExternalLinkDirective,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContactComponent,
    AreaComponent,
    PieComponent,
    Plotly144Component,
    Pyplot1Component,
    LeafletLayersComponent,
    VisualizationComponent,
    KwhSimComponent,
    ProvStreetlightsComponent,
    SimulationComponent,
    OptimizationComponent,
    OptimizeWidgetComponent,
    CardComponent
  ]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faPhoneAlt);
    library.addIcons(faAt);
    library.addIcons(faTwitter);
    library.addIcons(faGithub);
    library.addIcons(faLinkedin);
    library.addIcons(faGlobe);
    library.addIcons(faFile);
    library.addIcons(faFileAlt);
    library.addIcons(faUser);
    library.addIcons(faUserAlt);
  }
}
