import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnnademasComponent } from './admin-annademas.component';

describe('AdminAnnademasComponent', () => {
  let component: AdminAnnademasComponent;
  let fixture: ComponentFixture<AdminAnnademasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAnnademasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnnademasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
