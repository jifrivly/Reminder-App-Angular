import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '@shared/Components/not-found/not-found.component';
import { DashboardComponent } from '@shared/Components/dashboard/dashboard.component';

export const ROUTE_PATHS = {
    BASE: '',
    REMINDER: 'reminders',
    NOT_FOUND: 'not-found',
};

const routes: Routes = [
    {
        path: ROUTE_PATHS.BASE,
        component: DashboardComponent,
    },
    {
        path: ROUTE_PATHS.REMINDER,
        loadChildren: () =>
            import('@modules/reminder/reminder.module').then(
                (m) => m.ReminderModule,
            ),
    },
    {
        path: ROUTE_PATHS.NOT_FOUND,
        component: NotFoundComponent,
    },
    {
        path: '**',
        redirectTo: ROUTE_PATHS.NOT_FOUND,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
