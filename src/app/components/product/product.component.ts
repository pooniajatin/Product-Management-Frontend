import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/productService/product.service';
import { CommonModule, NgFor } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ProductmodalComponent } from '../productmodal/productmodal.component';

@Component({
  selector: 'app-product',
  imports: [CommonModule,MatButton],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  private productService = inject(ProductService);
  products :any[]=[]
  constructor(private dialog:MatDialog){}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.productService.getAllProducts().subscribe(
      {
        next:(res)=>{
          this.products = res.products;
        },
        error:(err)=> console.log(err)
      }
    )
  }
  openModal(product:any){
    this.dialog.open(ProductmodalComponent,{
     data:product,
     width:'450px',
     height:"550px"

    }
    )
  }
}
