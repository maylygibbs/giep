import { AppCommonModule } from '../app-common/app-common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { RouterModule } from '@angular/router';


/* Containers */
import * as valuesMenuContainers from './containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [...valuesMenuContainers.containers],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AppCommonModule,
    NavigationModule
  ],
  exports: [...valuesMenuContainers.containers]
})
export class ValuesMenuModule { }
