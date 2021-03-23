import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {LOCALE_ID, NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from '@app/app.component';
import {AppRoutingModule} from '@app/app-routing.module';
import {BasketComponent} from '@app/basket/basket.component';
import {IntStringDirective} from '@app/directives/int-string.directive';
import {ProductListComponent} from '@app/product-list/product-list.component';
import {BasketService} from '@app/services/basket.service';
import {ProductsService} from '@app/services/products.service';
import {FormsModule} from '@angular/forms';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    IntStringDirective,
    ProductListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [
    BasketService,
    ProductsService,
    {
      provide: LOCALE_ID,
      useValue: 'ru'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
