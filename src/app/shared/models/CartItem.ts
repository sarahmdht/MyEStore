// import { Product } from "./Product";

// export default class CartItem {
//     id!: string;
//     product: Product;
   

//     constructor(product: Product){
//         this.product = product;
//         this.totalitem;
//         this.price
        
//     }

//     get price(): number {
//         return this.product.discount && this.product.discount < this.product.price 
//             ? this.product.price - this.product.discount 
//             : this.product.price;
//     }
    
//      get totalitem(): number {
//         return this.price * this.product.quantity;
//     }
// }

import { Product } from "./Product";

export default class CartItem {
    id!: string;
    product: Product;

    constructor(product: Product) {
        this.product = product;
        this.totalitem;
        this.price;
    }

    get price(): number {
        // If the discount is 0 or greater, or greater than or equal to the price, return the full price
        return this.product.discount > 0 && this.product.discount < this.product.price 
            ? this.product.price - this.product.discount 
            : this.product.price;
    }

    get totalitem(): number {
        return this.price * this.product.quantity;
    }
}