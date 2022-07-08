import { DashboardRegularModule } from './dashboard-regular.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Containers */
import * as dashboardRegularContainers from './containers';
import { RegularGuard } from './guards';

export const routes: Routes = [
    {
      path: '',
      data: {
          title: 'Dashboard Regular - GIEP',
          breadcrumbs: [
              {
                  text: 'Dashboard Regular',
                  active: true,
              },
          ],
      } as SBRouteData,
      canActivate: [RegularGuard],
      component: dashboardRegularContainers.DashboardRegularComponent,
  }
];

@NgModule({
  imports: [DashboardRegularModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRegularRoutingModule { }
