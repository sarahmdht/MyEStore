import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  carttotal!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }

  setCart() {
    this.carttotal = this.cartService.getCart();
  }
}
