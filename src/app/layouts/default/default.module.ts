import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule, MatSidenavModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AboutComponent } from 'src/app/modules/about/about.component';
import { ChartComponent } from 'src/app/modules/chart/chart.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PageNotFoundComponent } from 'src/app/modules/page-not-found/page-not-found.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultComponent } from './default.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AboutComponent,
    ChartComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule
  ]
})
export class DefaultModule { }
