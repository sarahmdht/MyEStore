import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Category } from '../shared/models/Category';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent {
  category: Category[] = [];
  constructor(private productService: ProductsService) {
    this.productService.getAllCategories().then(category => {
      this.category = category;
    });
  }
}
