import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TjuIndexComponent } from './tju-index.component';

describe('TjuIndexComponent', () => {
  let component: TjuIndexComponent;
  let fixture: ComponentFixture<TjuIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TjuIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TjuIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
