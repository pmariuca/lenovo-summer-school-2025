import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-order',
  imports: [
    FooterComponent,
    HeaderComponent,
    InputTextModule,
    ReactiveFormsModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    OverlayBadgeModule,
    AvatarModule,
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  orderBasket = [
    {
      dishId: '6887544399c44a0944ca2e5e',
      restaurantId: '6887544399c44a0944ca2e5d',
      name: 'Beef Tacos',
      description: 'Corn tortillas filled with seasoned beef and toppings',
      price: 10,
      quantity: 1,
    },
    {
      dishId: '6887544399c44a0944ca2e5f',
      restaurantId: '6887544399c44a0944ca2e5d',
      name: 'Churros',
      description: 'Fried dough pastry with cinnamon sugar',
      price: 6,
      quantity: 2,
    },
  ];

  deliveryFormGroup = new FormGroup({
    contact: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
    payment: new FormControl(''),
  });

  displayValues() {
    console.log(this.deliveryFormGroup.getRawValue());
  }

  getTotalValue() {
    return this.orderBasket.reduce((acc, currV) => {
      return acc + currV.price * currV.quantity;
    }, 0);
  }
}
