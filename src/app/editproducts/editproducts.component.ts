import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productService/product.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-editproducts',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './editproducts.component.html',
  styleUrl: './editproducts.component.css'
})
export class EditproductsComponent implements OnInit{
  constructor(private productService:ProductService
  ){
  }
   success!:string;
   errormsg!:string
   product!: any
   ngOnInit(): void {
     this.product = new FormGroup({
      name: new FormControl('',[
        Validators.required,
      ]),
      imageUrl:new FormControl(''),
      price: new FormControl('',[Validators.required]),
      description:new FormControl(''),
      rating:new FormControl('')
     })
   }
  onSubmit(){
    this.productService.createProduct(this.product.value).subscribe({
      next:(res)=> this.success = res.msg,
      error:(err)=> this.errormsg = err
    })
  }
}
