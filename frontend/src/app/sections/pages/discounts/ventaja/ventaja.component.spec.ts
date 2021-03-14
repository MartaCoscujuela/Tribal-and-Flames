import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentajaComponent } from './ventaja.component';

describe('VentajaComponent', () => {
  let component: VentajaComponent;
  let fixture: ComponentFixture<VentajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
