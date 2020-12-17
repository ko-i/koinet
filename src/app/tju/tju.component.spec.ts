import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TjuComponent } from './tju.component';

describe('TjuComponent', () => {
  let component: TjuComponent;
  let fixture: ComponentFixture<TjuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TjuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
