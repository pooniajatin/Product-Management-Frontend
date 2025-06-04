import { Component, inject } from '@angular/core';
import { DummyService } from '../services/dummyService/dummy.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dummy',
  imports: [NgIf],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css'
})
export class DummyComponent {
  private dummy = inject(DummyService)
  message!:any;
  
  displaydummy(){
     this.dummy.dummyService().subscribe({
      next:(res)=> this.message = res.msg,
      error:(err)=>console.log(err)
      
    })
  }
}
