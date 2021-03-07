import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutribalComponent } from './aboutribal.component';

describe('AboutribalComponent', () => {
  let component: AboutribalComponent;
  let fixture: ComponentFixture<AboutribalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutribalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutribalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
