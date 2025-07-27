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
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
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
}
