import { Component } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
MatNativeDateModule
@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.scss']
})
export class ContactinfoComponent {
  constructor(
    private dialogRef : MatDialogRef<ContactinfoComponent>,
    
  ){}
  add(e:any){

  }
  cancel(e:any){
    this.dialogRef.close();
  }
}
