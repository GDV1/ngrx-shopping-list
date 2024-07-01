import { createAction, props } from "@ngrx/store";
import { IShoppingListItem } from "./shopping-list.state";


// Action de carregamento
export const loadShoppingList = createAction('[Shopping List] Load Shopping List Success');

// Action de sucesso do carregamento
export const loadShoppingListSuccess = createAction(
    '[Shopping List] Load Shopping List',
    props<{entities: IShoppingListItem[]}>()
);

// Action de erro do carregamento
export const loadShoppingListError = createAction(
    '[Shopping List] Load Shopping Error',
);
