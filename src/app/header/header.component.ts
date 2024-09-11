import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  home = faHouse;
  department = faStore;
  deals = faTag;
  cart = faCartShopping;
  account = faUser;
  carttotal!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }

  setCart() {
    this.carttotal = this.cartService.getCart();
  }
}
