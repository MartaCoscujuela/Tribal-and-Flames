import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomReelComponent } from './bottom-reel.component';

describe('BottomReelComponent', () => {
  let component: BottomReelComponent;
  let fixture: ComponentFixture<BottomReelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomReelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomReelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
