import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { Category } from '../shared/models/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // fetch api
  // productsApiUrl = "http://localhost:3000/products";
  productsApiUrl = "../db.json";

  constructor() { }

  // For category filter

  async getAllCategories(): Promise<Category[]> {
    const data = await fetch(this.productsApiUrl);
    const products: Product[] = await data.json() ?? [];

    const uniqueCategories = new Set<string>();

    products.forEach(product => {
      if (product.categories) {
        uniqueCategories.add(product.categories);
      }
    });

    return Array.from(uniqueCategories).map(categoryName => ({ categories: categoryName }));
  }

  async getAllProductsByCategory(category: string): Promise<Product[]> {
    if (category == "All") {
      return this.getAllProducts();
    } else {
      return (await this.getAllProducts()).filter(product => product.categories?.includes(category));
    }
  }

  //Get All Products in shop page
  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.productsApiUrl)
    return await data.json() ?? [];
  }

  // get product by ID for single product

  async getProductById(id: number): Promise<Product | undefined> {
    const data = await fetch(`${this.productsApiUrl}/${id}`);
    return await data.json() ?? {};
  }
}
