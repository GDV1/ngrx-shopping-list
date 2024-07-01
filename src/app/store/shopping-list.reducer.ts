import { createReducer, on } from "@ngrx/store";
import { IShoppingListState } from "./shopping-list.state";
import { loadShoppingList, loadShoppingListError, loadShoppingListSuccess } from "./shopping-list.actions";

export const initialState: IShoppingListState = {
    entities: [],
    isLoading: false
}

// O Reducer é quem faz a mudança do estado atual e grava as alterações no Store. Dentro do Reducer
// definimos o estado inicial (initialState) e criamos os métodos 'on' que vão manipular o estado da aplicação.

export const shoppingListReducer = createReducer(
    initialState,

    // A sintaxe de objeto dentro do 'on' permite que seja alterado somente o campo desejado, evitando que seja alterado algo desnecessário
    // ou que possa comprometer o funcionamento do app.
    on(loadShoppingList, (state) => ({
        ...state, // Aqui mantém o estado que veio ao executar a action
        isLoading: true // Aqui altero o campo (ou os campos) necessários para a funcionalidade que está sendo desenvolvida
    })),

    on(loadShoppingListSuccess, (state, { entities }) => ({
        ...state,
        entities,
        isLoading: false
    })),

    on(loadShoppingListError, (state) => ({
        ...state,
        isLoading: false
    }))
)

