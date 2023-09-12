import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent {
  constructor(
    private dialogRef : MatDialogRef<WebsiteComponent>
  ){}
  add(e:any){

  }
  cancel(e:any){
    this.dialogRef.close();
  }
}
