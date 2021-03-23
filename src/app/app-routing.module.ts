import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasketComponent} from '@app/basket/basket.component';
import {ProductListComponent} from '@app/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'basket',
    component: BasketComponent,
  },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: '**',
    redirectTo: 'product-list',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
