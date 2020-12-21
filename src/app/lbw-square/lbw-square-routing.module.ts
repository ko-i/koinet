import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LbwSquareIndexComponent } from './lbw-square-index/lbw-square-index.component';
import { LbwSquareComponent } from './lbw-square.component';

const lbwSquareRoutes: Routes = [
    {
        path: '',
        component: LbwSquareComponent,
        children: [
            {
                path: '',
                component: LbwSquareIndexComponent,
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(lbwSquareRoutes)],
    exports: [RouterModule]
})
export class LbwSquareRoutingModule { }
