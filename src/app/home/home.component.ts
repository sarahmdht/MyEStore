import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../shared/models/Product';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = [];


  constructor(private productService: ProductsService) {
    this.productService.getAllProducts().then((productsList: Product[]) => {
      this.products = productsList;
    })
  }
}
