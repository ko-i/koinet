import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

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
    path: 'lbw-square',
    loadChildren: () => import('./lbw-square/lbw-square.module').then(m => m.LbwSquareModule),
    data: { preload: true }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
