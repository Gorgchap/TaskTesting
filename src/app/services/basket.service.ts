import {Injectable} from '@angular/core';
import {BasketItem, ListItem} from '@app/domain/items';
import {Observable, of} from 'rxjs';
import {debounceTime, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basketItems: BasketItem[] = [];
  private timeout = 1000;

  constructor() { }

  addItem(product: ListItem, count: number): Observable<void> {
    return of(void 0).pipe(
      debounceTime(this.timeout),
      tap(() => {
        const index = this.basketItems.findIndex(e => e.id === product.id);
        if (index > -1) {
          this.basketItems[index].count += count;
        } else {
          this.basketItems.push({ ...product, count });
        }
      })
    );
  }

  deleteItem(id: number): Observable<void> {
    return of(void 0).pipe(
      debounceTime(this.timeout),
      tap(() => this.basketItems = this.basketItems.filter(e => e.id !== id))
    );
  }

  editItem(id: number, count: number): Observable<void> {
    return of(void 0).pipe(
      debounceTime(this.timeout),
      tap(() => {
        const index = this.basketItems.findIndex(e => e.id === id);
        if (index > -1) {
          this.basketItems[index].count = count;
        }
      })
    );
  }

  getItems(): Observable<BasketItem[]> {
    return of(this.basketItems).pipe(debounceTime(this.timeout));
  }
}
