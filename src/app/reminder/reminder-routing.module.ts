import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ReminderDashboardComponent } from './reminder-dashboard/reminder-dashboard.component';
import { ReminderViewEditComponent } from './reminder-view-edit/reminder-view-edit.component';

const route: Route[] = [
  {
    path: '',
    component: ReminderDashboardComponent,
  },
  {
    path: 'view/:id',
    component: ReminderViewEditComponent,
  },
  {
    path: 'edit/:id',
    component: ReminderViewEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class ReminderRoutingModule {}
