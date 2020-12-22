import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TjuComponent } from './tju.component';
import { TjuIndexComponent } from './tju-index/tju-index.component';
import { HighMathExamComponent } from './high-math-exam/high-math-exam.component';
import { TjuRoutingModule } from './tju-routing.module';

import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [TjuComponent, TjuIndexComponent, HighMathExamComponent],
  imports: [
    CommonModule,
    TjuRoutingModule,

    NzCardModule
  ]
})
export class TjuModule { }
