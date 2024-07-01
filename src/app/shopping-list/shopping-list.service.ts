import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable()
export class ShoppingListService {
    ingredientsMock = [
        {
            id: 1,
            name: 'Milk',
            quantity: 1
        },
        {
            id: 2,
            name: 'Bread',
            quantity: 5
        }
    ];

    getIngredients() {
        return of(this.ingredientsMock);
    }
}


