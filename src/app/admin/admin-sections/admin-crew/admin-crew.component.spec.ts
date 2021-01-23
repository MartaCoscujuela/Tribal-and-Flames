import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCrewComponent } from './admin-crew.component';

describe('AdminCrewComponent', () => {
  let component: AdminCrewComponent;
  let fixture: ComponentFixture<AdminCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
