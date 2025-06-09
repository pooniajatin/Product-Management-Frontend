import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productService/product.service';
import { Router } from '@angular/router';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-producttable',
  imports: [NgFor,CurrencyPipe,NgClass],
  templateUrl: './producttable.component.html',
  styleUrl: './producttable.component.css',
})
export class ProducttableComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}
  ngOnInit(): void {
    this.getProducts();
  }
  deleteMsg!: any;
  product!: any[];

  getProducts() {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        this.product = res.products;
      },
      error: (err) => console.log(err),
    });
  }
  deleteProduct(id: any) {
    this.productService.deleteProduct(id).subscribe({
      next: (res) => {
        this.deleteMsg = res.msg;
        this.product = this.product.filter(product=>product._id!=id)
      },
      error: (err) => console.log(err),
    });
  }
  updateProducts(id:any){
      this.router.navigate(['createproduct',id])
  }
}
