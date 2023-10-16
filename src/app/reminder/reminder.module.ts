import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { ReminderRoutingModule } from './reminder-routing.module';
import { ReminderDashboardComponent } from './reminder-dashboard/reminder-dashboard.component';


@NgModule({
  declarations: [ReminderDashboardComponent],
  imports: [CommonModule, ReminderRoutingModule, MatIconModule],
})
export class ReminderModule {}
