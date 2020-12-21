import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighMathExamComponent } from './high-math-exam.component';

describe('HighMathExamComponent', () => {
  let component: HighMathExamComponent;
  let fixture: ComponentFixture<HighMathExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighMathExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighMathExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
