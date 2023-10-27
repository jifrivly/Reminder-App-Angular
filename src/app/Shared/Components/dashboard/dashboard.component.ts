import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTE_PATHS } from '@app/app-routing.module';
import { SharedModule } from '@app/Shared/shared.module';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    imports: [SharedModule],
})
export class DashboardComponent {
    links = [
        {
            name: 'Reminder',
            path: ROUTE_PATHS.REMINDER,
        },
    ];
}
