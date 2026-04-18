import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './Features/Layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './Features/Layout/main-layout/main-layout.component';
import { LoginComponent } from './Features/Auth/login/login.component';
import { RegisterComponent } from './Features/Auth/register/register.component';
import { HomeComponent } from './Features/Pages/home/home.component';
import { CartComponent } from './Features/Pages/cart/cart.component';
import { BrandsComponent } from './Features/Pages/brands/brands.component';
import { CategoriesComponent } from './Features/Pages/categories/categories.component';
import { ShopComponent } from './Features/Pages/shop/shop.component';
import { ProductDetailsComponent } from './Features/Pages/product-details/product-details.component';
import { NotFoundComponent } from './Features/Pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      // Nesting Routing
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      // Nesting Routing
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'brands', component: BrandsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'product', component: ProductDetailsComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
