import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomVideoComponent } from './bottom-video.component';

describe('BottomVideoComponent', () => {
  let component: BottomVideoComponent;
  let fixture: ComponentFixture<BottomVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
