import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductsService } from '../products.service';
import * as fromActions from './store.action'
import { UsersService } from '../users.service';

@Injectable()

export class ProductsEffects {

  constructor(private actions$: Actions, private productService: ProductsService, private service: UsersService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadProducts),
      mergeMap(() =>
        this.productService.getProduct().pipe(
          map((data) => fromActions.loadProductsSuccess({ data })),
          catchError((error) => of(fromActions.loadProductsFailure({ error })))
        )
      )
    )
  );

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadUsers),
      mergeMap(() => this.productService.getUsers().pipe(
        map((data) => fromActions.loadUsersSuccess({data}))
      ))
    )
  );

  loadEmployee$ = createEffect(() =>
   this.actions$.pipe(
    ofType(fromActions.loadEmployee),
    mergeMap(() => this.service.getUserss().pipe(
      map((data) => fromActions.loadEmployeeSuccess({data}))
    ))
   )
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addUser),
      mergeMap((action) =>
        this.service.addPost(action.myObj).pipe(
          map((data) => fromActions.addUserSuccess({  data })),
        )
      )
    )
  );
}
