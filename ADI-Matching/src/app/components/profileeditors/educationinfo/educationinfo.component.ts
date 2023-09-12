import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-educationinfo',
  templateUrl: './educationinfo.component.html',
  styleUrls: ['./educationinfo.component.scss']
})
export class EducationinfoComponent {
  constructor(
    private dialogRef : MatDialogRef<EducationinfoComponent>
  ){}
  add(e:any){

  }
  cancel(e:any){
    this.dialogRef.close();
  }
}
