import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '@modules/navigation/navigation.module';



/* Containers */
import * as dashboardRegularContainers from './containers';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...dashboardRegularContainers.containers],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule
  ],
  exports: [...dashboardRegularContainers.containers]
})
export class DashboardRegularModule { }
