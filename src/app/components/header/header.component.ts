import { Component, Input } from '@angular/core';
import { FoodvoLogoComponent } from '../../icons/foodvo-logo/foodvo-logo.component';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [FoodvoLogoComponent, ButtonModule],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() address: String = '';
  @Input() login: Boolean = false;

  constructor(private router: Router) {}

  redirectToLogin(): void {
    this.router.navigate(['/']);
  }

  redirectToHomepage() {
    this.router.navigate(['/home']);
  }

  openCart(): void {
    this.router.navigate(['/order']);
  }
}
