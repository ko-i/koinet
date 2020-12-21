import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LbwSquareComponent } from './lbw-square.component';

describe('LbwSquareComponent', () => {
  let component: LbwSquareComponent;
  let fixture: ComponentFixture<LbwSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LbwSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LbwSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
