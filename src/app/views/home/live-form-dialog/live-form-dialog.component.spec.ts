import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveFormDialogComponent } from './live-form-dialog.component';

describe('LiveFormDialogComponent', () => {
  let component: LiveFormDialogComponent;
  let fixture: ComponentFixture<LiveFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveFormDialogComponent]
    });
    fixture = TestBed.createComponent(LiveFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
