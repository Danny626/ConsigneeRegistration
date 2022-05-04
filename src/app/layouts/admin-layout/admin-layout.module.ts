import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { ConsigneeProfileModule } from 'app/pages/consignee-profile/consignee-profile.module';
import { ComponentsModule } from 'app/components/components.module';
import { AdminLayoutComponent } from './admin-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminLayoutRoutes,
    ComponentsModule,
    ConsigneeProfileModule
  ],
  declarations: [
    AdminLayoutComponent
  ]
})

export class AdminLayoutModule {}
