import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

declare var paypal: { Buttons: (arg0: { createOrder: (data: any, actions: any) => any; onApprove: (data: any, actions: any) => Promise<void>; }) => { (): any; new(): any; render: { (arg0: any): void; new(): any; }; }; };

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss'],
  //imports: [MatDialogModule, MatButtonModule],
})
export class PaypalComponent implements OnInit {
  constructor(){}

  @ViewChild('paypal', { static: true })
  paypalElement!: ElementRef;

  product = {
    price: 1,
    description: 'used couch, decent condition',
    
  }

  paidFor = false;

  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'EUR',
                  value: this.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
        },
      })
      .render(this.paypalElement.nativeElement);
  }

}
