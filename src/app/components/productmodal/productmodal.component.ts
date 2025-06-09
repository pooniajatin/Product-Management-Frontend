import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-productmodal',
  imports: [MatButton,CommonModule],
  templateUrl: './productmodal.component.html',
  styleUrl: './productmodal.component.css'
})
export class ProductmodalComponent {
 constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProductmodalComponent>){}
}
