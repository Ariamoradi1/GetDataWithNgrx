import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as states from "./store.state"

export const selectProductsState = createFeatureSelector<states.ProductsState>('products');

export const selectProductsData = createSelector(selectProductsState, (state) => state.data);
export const selectProductsLoading = createSelector(selectProductsState, (state) => state.loading);
export const selectProductsError = createSelector(selectProductsState, (state) => state.error);

//// select users

export const selectUsersState = createFeatureSelector<states.UsersState>('users');

export const selectUsers = createSelector(selectUsersState,(state) => state.data)

//// select employee

export const selectEmployeeState = createFeatureSelector<states.employee>('employee');

export const selectEmployee = createSelector(selectEmployeeState,(state) => state.data)
