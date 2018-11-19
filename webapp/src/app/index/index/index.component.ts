import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  products: Product[] = [];
  displayData: Product[] = [];

  constructor( private productService: ProductService) {
    productService.getAllProducts().then(data => {
      this.products = [...data];
      this.displayData = [...this.products];
    });
   }

  ngOnInit() {
  }
  onSearch(searchText: string) {
    this.displayData = this.products.filter((products) => {
      return Object.keys(products).some(keys => products[keys] != null &&
        products[keys].toString().toLowerCase()
          .includes(searchText.toLowerCase()));
    });
}
}
