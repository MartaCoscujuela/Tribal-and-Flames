import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouttribalComponent } from './abouttribal.component';

describe('AbouttribalComponent', () => {
  let component: AbouttribalComponent;
  let fixture: ComponentFixture<AbouttribalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbouttribalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouttribalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
