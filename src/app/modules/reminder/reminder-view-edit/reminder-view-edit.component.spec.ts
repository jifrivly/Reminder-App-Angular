import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderViewEditComponent } from './reminder-view-edit.component';

describe('ReminderViewEditComponent', () => {
    let component: ReminderViewEditComponent;
    let fixture: ComponentFixture<ReminderViewEditComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ReminderViewEditComponent],
        });
        fixture = TestBed.createComponent(ReminderViewEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
