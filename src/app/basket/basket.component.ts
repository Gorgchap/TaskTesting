import {Component, OnInit} from '@angular/core';
import {BasketService} from '@app/services/basket.service';
import {BasketItem} from '@app/domain/items';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basketItems: Observable<BasketItem[]>;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketItems = this.basketService.getItems();
  }

  deleteItem(id: number): void {
    this.basketService.deleteItem(id).subscribe(() => this.ngOnInit());
  }

  editItem(id: number, count: number): void {
    if (count) {
      this.basketService.editItem(id, count).subscribe(() => this.ngOnInit());
    }
  }
}
