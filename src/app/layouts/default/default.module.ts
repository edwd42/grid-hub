import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatCardModule,
  MatDividerModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatTableModule
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "src/app/modules/about/about.component";
import { DashboardService } from "src/app/modules/dashboard.service";
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { HomeComponent } from "src/app/modules/home/home.component";
import { PageNotFoundComponent } from "src/app/modules/page-not-found/page-not-found.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ToolsModule } from "../../tools/tools.module";
import { DefaultComponent } from "./default.component";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    ToolsModule
  ],
  providers: [DashboardService]
})
export class DefaultModule {}
