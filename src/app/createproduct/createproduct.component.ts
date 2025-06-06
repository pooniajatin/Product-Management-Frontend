import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../services/productService/product.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-createproduct',
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './createproduct.component.html',
  styleUrl: './createproduct.component.css'
})
export class CreateproductComponent {
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
      description:new FormControl('',[Validators.required]),
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
