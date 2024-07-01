import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getShoppingList } from './store/shopping-list.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // ingredients: IShoppingListItem[] = [
  //   { id: 1 , name: 'Apples', quantity: 10 },
  //   { id: 2 , name: 'Tomatoes', quantity: 5 }
  // ]

  constructor(private store: Store) {}

  ingredients$ = this.store.pipe(
    select(getShoppingList)
  )

  
}
