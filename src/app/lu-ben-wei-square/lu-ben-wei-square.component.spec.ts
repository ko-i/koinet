import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuBenWeiSquareComponent } from './lu-ben-wei-square.component';

describe('LuBenWeiSquareComponent', () => {
  let component: LuBenWeiSquareComponent;
  let fixture: ComponentFixture<LuBenWeiSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuBenWeiSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuBenWeiSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
