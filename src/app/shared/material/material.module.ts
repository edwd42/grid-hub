import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSliderModule,
  MatToolbarModule
} from "@angular/material";

const MaterialComponents = [
  MatSliderModule,
  MatDividerModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
