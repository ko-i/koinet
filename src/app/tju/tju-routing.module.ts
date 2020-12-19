import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoHighMathComponent } from './do-high-math/do-high-math.component';
import { TjuIndexComponent } from './tju-index/tju-index.component';
import { TjuComponent } from './tju.component';

const tjuRoutes: Routes = [
    {
        path: '',
        component: TjuComponent,
        children: [
            {
                path: '',
                component: TjuIndexComponent
            },
            {
                path: 'do-high-math',
                component: DoHighMathComponent,
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(tjuRoutes)],
    exports: [RouterModule]
})
export class TjuRoutingModule { }
