import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LbwSquareIndexComponent } from './lbw-square-index.component';

describe('LbwSquareIndexComponent', () => {
  let component: LbwSquareIndexComponent;
  let fixture: ComponentFixture<LbwSquareIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LbwSquareIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LbwSquareIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
