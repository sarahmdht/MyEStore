import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '../shared/models/Product';
import { ProductsService } from '../services/products.service';
import { SearchComponent } from '../search/search.component';
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, SearchComponent, SideBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductsService, private cartService: CartService, private route: ActivatedRoute) {

    //search
    this.route.params.subscribe(async params => {
      if (params['searchTerm']) {
        this.products = (await this.productService.getAllProducts()).filter(product => product.title.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      } else if (params['category']) {
        this.products = (await this.productService.getAllProductsByCategory(params['category']));
      } else {
        this.productService.getAllProducts().then((productsList: Product[]) => {
          this.products = productsList;
        })
      }
    })
  }
  addCartItem(item: Product) {
    this.cartService.addToCart(item);
  }
}
