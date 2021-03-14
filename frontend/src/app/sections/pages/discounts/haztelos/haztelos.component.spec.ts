import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaztelosComponent } from './haztelos.component';

describe('HaztelosComponent', () => {
  let component: HaztelosComponent;
  let fixture: ComponentFixture<HaztelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaztelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaztelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
