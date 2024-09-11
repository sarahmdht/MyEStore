export class Product {
    id!: string;
    sku!: string;
    title!: string;
    price!: number;
    discount: number = 0;
    quantity: number = 1;
    image!: string;
    description!: string;
    category!: string;
    constructor(init?: Partial<Product>) {
        Object.assign(this, init);
    }
}
