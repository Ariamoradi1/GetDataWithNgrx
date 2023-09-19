import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from "./store.action";
import * as states from "./store.state"
import { state } from '@angular/animations';

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
);

export const employeeReducer = createReducer (
  states.employee,
  on(fromActions.loadEmployee, (state) => ({...state})),
  on(fromActions.loadEmployeeSuccess, (state,{data}) => ({...state,data}))
);


const _postReducer = createReducer(
  states.addState,
  on(fromActions.addUserSuccess, (state, { data }) => ({...state, data})),
);

export function postReducer(state: states.addState | undefined, action: Action) {
  return _postReducer(state, action);
}
