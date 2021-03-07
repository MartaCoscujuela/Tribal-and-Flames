import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgEditorComponent } from './img-editor.component';

describe('ImgeditorComponent', () => {
  let component: ImgEditorComponent;
  let fixture: ComponentFixture<ImgEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
