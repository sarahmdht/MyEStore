import CartItem from "./CartItem";

export class Cart {
    items: CartItem[] = [];

    get totalPrice(): number {
        let totalPrice = 0 ;
        this.items.forEach(item => {
            totalPrice += item.totalitem
        })
        return parseFloat(totalPrice.toFixed(2));
    }
}