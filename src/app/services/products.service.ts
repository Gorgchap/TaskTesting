import {Injectable} from '@angular/core';
import {data} from '@app/domain/data';
import {ListItem} from '@app/domain/items';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Observable<ListItem[]> {
    return of(data).pipe(delay(1000));
  }
}
