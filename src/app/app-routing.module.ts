import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { IndexComponent } from './index/index.component';
import { LuBenWeiSquareComponent } from './lu-ben-wei-square/lu-ben-wei-square.component';
import { TjuComponent } from './tju/tju.component';

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
    path: 'tju',
    loadChildren: () => import('./tju/tju.module').then(m => m.TjuModule),
    data: { preload: true }
  },
  {
    path: 'lu-ben-wei-square',
    component: LuBenWeiSquareComponent,
  },
  {
    path: 'bar',
    component: BarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
