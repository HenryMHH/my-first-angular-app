import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwRoutingModule } from './tw-routing.module';
import { TwComponent } from './tw.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { IndexComponent } from './pages/index/index.component';
import { ProductlistComponent } from './pages/product/productlist/productlist.component';
// import { ContentComponent } from '../maintain/content/content.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    TwComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    ProductComponent,
    IndexComponent,
    ProductlistComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    TwRoutingModule,
    HttpClientModule,
  ],
})
export class TwModule {}
