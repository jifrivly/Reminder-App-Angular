import {
  Component,
  OnInit,
  Signal,
  WritableSignal,
  signal,
} from '@angular/core';
import * as moment from 'moment';

import { TReminder, days } from '../reminder.model';

@Component({
  selector: 'app-reminder-dashboard',
  templateUrl: './reminder-dashboard.component.html',
  styleUrls: ['./reminder-dashboard.component.css'],
})
export class ReminderDashboardComponent implements OnInit {
  private _reminders: WritableSignal<TReminder[]> = signal([]);
  days = days;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._reminders.set([
      {
        name: '1st reminder',
        description: 'sample reminder',
        time: moment(),
        schedules: { SON: true },
      },
    ]);
  }

  get reminders(): Signal<TReminder[]> {
    return this._reminders.asReadonly();
  }

  toggleEditMode() {}
}
