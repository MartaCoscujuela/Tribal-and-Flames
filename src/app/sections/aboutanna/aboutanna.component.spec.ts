import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutannaComponent } from './aboutanna.component';

describe('AboutannaComponent', () => {
  let component: AboutannaComponent;
  let fixture: ComponentFixture<AboutannaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutannaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
