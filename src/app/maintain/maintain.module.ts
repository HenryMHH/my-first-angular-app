import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintainRoutingModule } from './maintain-routing.module';
import { MaintainComponent } from './maintain.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    MaintainComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    MaintainRoutingModule
  ]
})
export class MaintainModule { }
