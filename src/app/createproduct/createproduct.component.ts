import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../services/productService/product.service';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createproduct',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './createproduct.component.html',
  styleUrl: './createproduct.component.css',
})
export class CreateproductComponent {
  id!: any;
  success!: string;
  errormsg!: string;
  product!: any;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.product = new FormGroup({
      name: new FormControl('', [Validators.required]),
      imageUrl: new FormControl(''),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      rating: new FormControl(''),
    });

    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.productService.getProduct(this.id).subscribe({
          next: (res) => {

            this.product.patchValue(res.product); 
          },
        });
      }
    });
  }
  
  
  onSubmit() {
    if(this.id){
       this.productService.updateProduct(this.id,this.product.value).subscribe({
        next:(res)=>{
          this.success = res.msg;
        },
        error:(err)=>{
          this.errormsg = err
        }
       })
    }else{
      this.productService.createProduct(this.product.value).subscribe({
      next: (res) => (this.success = res.msg),
      error: (err) => (this.errormsg = err),
    });
    }
    
  }
}
