import { LayoutAuthComponent } from './layout-auth/layout-auth.component';
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';
import { LayoutErrorComponent } from './layout-error/layout-error.component';
import { LayoutDashboardRegularComponent } from './layout-dashboard-regular/layout-dashboard-regular.component';

export const layouts = [LayoutDashboardComponent, LayoutAuthComponent, LayoutErrorComponent, LayoutDashboardRegularComponent];

export * from './layout-dashboard/layout-dashboard.component';
export * from './layout-auth/layout-auth.component';
export * from './layout-error/layout-error.component';
export * from './layout-dashboard-regular/layout-dashboard-regular.component';
