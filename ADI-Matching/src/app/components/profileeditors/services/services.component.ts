import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
MatFormFieldModule
MatInputModule
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  headerDescription:string = '';
   constructor(
    private dialogref : MatDialogRef<ServicesComponent>,
    @Inject(MAT_DIALOG_DATA) data:any
   ){
    this.headerDescription = data
   }
   cancel(e:any){
    this.dialogref.close()
   }
   add(e:any){
   }
}
