import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LbwSquareComponent } from './lbw-square.component';
import { LbwSquareIndexComponent } from './lbw-square-index/lbw-square-index.component';
import { LbwSquareRoutingModule } from './lbw-square-routing.module';



@NgModule({
  declarations: [LbwSquareComponent, LbwSquareIndexComponent],
  imports: [
    CommonModule,
    LbwSquareRoutingModule,
  ]
})
export class LbwSquareModule { }
