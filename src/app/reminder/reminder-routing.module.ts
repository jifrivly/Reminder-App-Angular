import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ReminderDashboardComponent } from './reminder-dashboard/reminder-dashboard.component';

const route: Route[] = [
  {
    path: '',
    component: ReminderDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class ReminderRoutingModule {}
