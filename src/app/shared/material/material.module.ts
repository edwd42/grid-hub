import { ScrollingModule } from "@angular/cdk/scrolling";
import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatSliderModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import { MatMenuModule } from "@angular/material/menu";

const MaterialComponents = [
  MatSliderModule,
  MatDividerModule,
  MatToolbarModule,
  MatTooltipModule,
  MatListModule,
  MatGridListModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  ScrollingModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
