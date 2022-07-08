import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { RouterModule } from '@angular/router';


/* Containers */
import * as dashboardRegularContainers from './containers';


/* Guards */
import * as dashboardRegularGuards from './guards';

@NgModule({
  declarations: [...dashboardRegularContainers.containers],
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule
  ],
  providers: [...dashboardRegularGuards.guards],
  exports: [...dashboardRegularContainers.containers]
})
export class DashboardRegularModule { }
