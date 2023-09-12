import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-relatedskills',
  templateUrl: './relatedskills.component.html',
  styleUrls: ['./relatedskills.component.scss']
})
export class RelatedskillsComponent {
  constructor(
    private dialogRef : MatDialogRef<RelatedskillsComponent>
  ){}
  add(e:any){

  }
  cancel(e:any){
    this.dialogRef.close();
  }
}
