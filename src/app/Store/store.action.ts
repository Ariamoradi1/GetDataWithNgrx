import { createAction, props } from '@ngrx/store';
import { myUsers } from '../models/myUsers.model';

export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction('[Products] Load Products Success', props<{ data: any }>());
export const loadProductsFailure = createAction('[Products] Load Products Failure', props<{ error: any }>());

///users
export const loadUsers = createAction('[Users] Load Users')
export const loadUsersSuccess = createAction('[Users] Load Users Success', props<{data : any}>())

///employe
export const loadEmployee = createAction('[employee] Load Employee')
export const loadEmployeeSuccess = createAction('[employee] Load Employee Success',props<{data:any}>())

///add user
export const addUser = createAction('[add] Add User', props<{myObj:any}>())
export const addUserSuccess = createAction('[add] Add User Success', props<{data:any}>())
