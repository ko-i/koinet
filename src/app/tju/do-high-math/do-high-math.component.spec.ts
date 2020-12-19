import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoHighMathComponent } from './do-high-math.component';

describe('DoHighMathComponent', () => {
  let component: DoHighMathComponent;
  let fixture: ComponentFixture<DoHighMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoHighMathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoHighMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
