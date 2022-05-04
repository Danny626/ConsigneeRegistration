import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsigneeProfileComponent } from 'app/pages/consignee-profile/consignee-profile.component';

import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [{
    path: '',
    component: AdminLayoutComponent,
    children: [
        { 
            path: 'consigneeProfile',        
            component: ConsigneeProfileComponent, 
            // canActivate: [GuardService] 
        },
        {
            path: '',
            redirectTo: 'consigneeProfile',
            pathMatch: 'full',
        },
        /*{ 
        path: '**',
        component: NotFoundComponent,
        }, */
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AdminLayoutRoutes { }
