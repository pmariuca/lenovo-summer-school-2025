import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-hero-section',
  imports: [
    FloatLabel,
    InputText,
    FormsModule,
    Button,
    NgIf
  ],
  templateUrl: './hero-section.component.html',
  standalone: true,
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  address: string = '';

  @Input() title: String = '';
  @Input() subtitle: String = '';
  @Input() showAddress: boolean = false;
  @Input() startHours: string = '';
  @Input() endHours: string = '';

  @Output() addressSubmitted = new EventEmitter<string>();

  submitAddress(): void {
    this.addressSubmitted.emit(this.address);
  }
}
