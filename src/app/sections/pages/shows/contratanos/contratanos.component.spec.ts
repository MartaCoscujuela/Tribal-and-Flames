import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratanosComponent } from './contratanos.component';

describe('ContratanosComponent', () => {
  let component: ContratanosComponent;
  let fixture: ComponentFixture<ContratanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
