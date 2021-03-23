import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ListItem} from '@app/domain/items';
import {BasketService} from '@app/services/basket.service';
import {ProductsService} from '@app/services/products.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  list: Observable<ListItem[]>;

  constructor(private basketService: BasketService,
              private productsService: ProductsService,
              private router: Router) { }

  ngOnInit(): void {
    this.list = this.productsService.getProducts();
  }

  addItemToBasket(product: ListItem, count: number): void {
    this.basketService.addItem(product, count).subscribe(() => this.router.navigate(['/basket']));
  }
}
