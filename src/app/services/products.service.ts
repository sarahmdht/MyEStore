import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { Category } from '../shared/models/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // productsApiUrl = "http://localhost:3000/products";
  productsApiUrl = "https://fakestoreapi.com/products";

  constructor() { }

  // For category filter
  async getAllCategories(): Promise<Category[]> {
    const data = await fetch(this.productsApiUrl);
    const products: Product[] = await data.json() ?? [];

    const uniqueCategories = new Set<string>();

    products.forEach(product => {
      if (product.category) {
        uniqueCategories.add(product.category);
      }
    });

    return Array.from(uniqueCategories).map(categoryName => ({ category: categoryName }));
  }

  async getAllProductsByCategory(category: string): Promise<Product[]> {
    if (category === "All") {
      return this.getAllProducts();
    } else {
      return (await this.getAllProducts()).filter(product => product.category?.includes(category));
    }
  }

  //Get All Products in shop page
  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.productsApiUrl);
    const products = await data.json() ?? [];

    // Ensure each product is instantiated as a Product class object
    return products.map((productData: Partial<Product>) => new Product(productData));
  }

  // get product by ID for single product
  async getProductById(id: number): Promise<Product | undefined> {
    const data = await fetch(`${this.productsApiUrl}/${id}`);
    const productData = await data.json() ?? {};

    // Instantiate as Product class object
    return new Product(productData);
  }
}
