import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TjuComponent } from './tju.component';
import { DoHighMathComponent } from './do-high-math/do-high-math.component';
import { TjuRoutingModule } from './tju-routing.module';
import { TjuIndexComponent } from './tju-index/tju-index.component';



@NgModule({
  declarations: [
    TjuComponent,
    DoHighMathComponent,
    TjuIndexComponent,
  ],
  imports: [
    CommonModule,
    TjuRoutingModule,
  ]
})
export class TjuModule { }
