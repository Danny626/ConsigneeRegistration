import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ConsigneeProfileModule } from 'app/pages/consignee-profile/consignee-profile.module';
import { ComponentsModule } from 'app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminLayoutRoutes,
    ComponentsModule,
    ConsigneeProfileModule
  ],
  declarations: [
    DashboardComponent
  ]
})

export class AdminLayoutModule {}
