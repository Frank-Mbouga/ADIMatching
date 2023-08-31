import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;
  constructor(private builder: FormBuilder){
    this.FormData = this.builder.group( {
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('',   [Validators.email]),
      Comment: new FormControl('', [Validators.required])
    
    })  
  }
   
  ngOnInit(): void {
      
  }
 

}



