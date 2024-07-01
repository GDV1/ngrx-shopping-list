import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { loadShoppingList, loadShoppingListError, loadShoppingListSuccess } from "./shopping-list.actions";
import { catchError, map, of, switchMap } from "rxjs";


export const loadShoppingListEffect = createEffect((
    actions$ = inject(Actions),
    service = inject(ShoppingListService)
) => actions$.pipe(
    ofType(loadShoppingList),
    switchMap(() => service.getIngredients().pipe(
        map(entities => loadShoppingListSuccess({entities}),
        catchError(() => of(loadShoppingListError()))
    ))
)))
