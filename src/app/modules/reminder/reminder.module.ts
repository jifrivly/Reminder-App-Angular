import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ReminderRoutingModule } from './reminder-routing.module';
import { ReminderDashboardComponent } from './reminder-dashboard/reminder-dashboard.component';
import { ReminderViewEditComponent } from './reminder-view-edit/reminder-view-edit.component';
import { SharedModule } from '@app/Shared/shared.module';

@NgModule({
  declarations: [ReminderDashboardComponent, ReminderViewEditComponent],
  imports: [SharedModule, ReminderRoutingModule, MatIconModule],
})
export class ReminderModule {}
