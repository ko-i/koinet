import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LuBenWeiSquareComponent } from './lu-ben-wei-square/lu-ben-wei-square.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'lu-ben-wei-square',
    component: LuBenWeiSquareComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
