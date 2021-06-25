import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintainComponent } from './maintain/maintain.component';
import { MaintainModule } from './maintain/maintain.module';
import { TwComponent } from './tw/tw.component';
import { TwModule } from './tw/tw.module';
// import { TwModule } from './tw/tw.module';

const routes: Routes = [
  { path: 'tw', loadChildren: () => TwModule },
  { path: 'dashboard', loadChildren: () => MaintainModule },
  { path: '**', redirectTo: 'tw' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
