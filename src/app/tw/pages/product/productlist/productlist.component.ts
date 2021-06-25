import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductListService } from 'src/app/tw/service/product-list.service';
import { stationlist } from './productlist.const';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
  providers: [ProductListService],
})
export class ProductlistComponent implements OnInit {
  displayedColumns: string[] = ['No.', 'Station', 'Destination', 'UpdateTime'];
  dataSource = new MatTableDataSource(stationlist);
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private productList: ProductListService) {}
  list = this.productList;
  data: any;
  getData() {
    this.productList.getData().then((value) => console.log(value));
    // .subscribe((item) => (this.data = item));
  }
  ngOnInit() {
    this.getData();
  }
}
