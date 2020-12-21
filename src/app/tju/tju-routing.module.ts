import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighMathExamComponent } from './high-math-exam/high-math-exam.component';

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
                path: 'tju/high-math-exam',
                component: HighMathExamComponent,
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(tjuRoutes)],
    exports: [RouterModule]
})
export class TjuRoutingModule { }
