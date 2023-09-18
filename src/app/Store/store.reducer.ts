import { createReducer, on } from '@ngrx/store';
import * as fromActions from "./store.action";
import * as states from "./store.state"

export const productsReducer = createReducer(
  states.initialState,
  on(fromActions.loadProducts, (state) => ({ ...state, loading: true, error: null })),
  on(fromActions.loadProductsSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(fromActions.loadProductsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);

export const usersReducer = createReducer (
  states.usersState,
  on(fromActions.loadUsers,(state) => ({...state})),
  on(fromActions.loadUsersSuccess, (state, {data}) => ({...state, data}))
)
