import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SingleProductComponent } from './single-product/single-product.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'cart', component: CartComponent},
    { path: 'products/:id', component: SingleProductComponent},
    { path: 'search/:searchTerm', component:HomeComponent},
    { path: 'category/:category', component:HomeComponent}
];
