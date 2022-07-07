import { ValuesMenuModule } from './values-menu.module';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Containers */
import * as valuesMenuContainers from './containers';

/* Containers */
import * as valuesMenuServices from './services';

export const routes: Routes = [
    {
      path: '',
      data: {
          title: 'Menu de Valores - GIEP',
          breadcrumbs: [
              {
                  text: 'Menu de Valores',
                  active: true,
              },
          ],
      } as SBRouteData,
      canActivate: [],
      component: valuesMenuContainers.ValuesMenuComponent,
  }
];

@NgModule({
  imports: [ValuesMenuModule, RouterModule.forChild(routes)],
  providers: [...valuesMenuServices.services],
  exports: [RouterModule]
})
export class ValuesMenuRoutingModule { }
