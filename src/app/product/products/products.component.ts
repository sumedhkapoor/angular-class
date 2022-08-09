import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/entities/product.entity';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: IProduct[];
  constructor() {

  }
  searchText: string = "";


  ngOnInit(): void {
    this.products = this.getProducts();
    console.table(this.products);
  }

  buy(product: IProduct) {
    alert ('You bought this product: '+product);
    console.table(product);
  }
  getProducts() : IProduct [] {
    return [
      {
        Id: "1",
        Title: 'iPhone',
        Price: 1000,
        Color: "Red",
        inStock: true,
        Quantity: 10,
        Agency: "abc"
      },
      {
        Id: "2",
        Title: 'iPhasdfsdfaone',
        Price: 1000,
        Color: "Green",
        inStock: true,
        Quantity: 10,
        Agency: "abc"
      },
      {
        Id: "3",
        Title: 'iPasdfasdfdfhone',
        Price: 1000,
        Color: "Blue",
        inStock: true,
        Quantity: 10,
        Agency: "abc"
      }
    ];
  }
}
