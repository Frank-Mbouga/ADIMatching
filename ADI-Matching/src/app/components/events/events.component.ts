import { Component, OnInit, NgModule, ViewChild, ElementRef } from '@angular/core';
import { CreateeventComponent } from '../createevent/createevent.component';
import { MatDialog } from '@angular/material/dialog';
import { FilterComponent } from '../filter/filter.component';
import { PaymentService } from 'src/app/services/payment.service';
import { PaypalComponent } from '../paypal/paypal.component';
//import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal/public_api';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
    //public payPalConfig?: IPayPalConfig;
    amount = 0;

    @ViewChild('paymentRef', {static: true}) paymentRef!: ElementRef;
    
    constructor( public dialog: MatDialog, private payment: PaymentService){

    }
    ngOnInit(): void {
        //this.amount = this.payment
        window.paypal.Buttons().render(this.paymentRef.nativeElement);
        throw new Error('Method not implemented.');
    }


    openPaypal(){
        const dialogRef = this.dialog.open(PaypalComponent);
        dialogRef.afterClosed().subscribe(resultPaypal => {

        });
    }

    openCreateEvent(){
        const dialogRef = this.dialog.open(CreateeventComponent);
        dialogRef.afterClosed().subscribe(result => { 
            console.log(`Dialog result: ${result}`);
         });
      }
    
    openFilter(){
        const dialogRef = this.dialog.open(FilterComponent);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        })
    }
    


  imageObject = [{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    title: 'Hummingbirds are amazing creatures'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    title: 'Example with title.'
},{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    title: 'Hummingbirds are amazing creatures'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    title: 'Example two with title.'
}];

}
