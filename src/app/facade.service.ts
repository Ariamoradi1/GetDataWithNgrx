import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from "./Store/store.action";
import * as selectors from "./Store/store.selector"

@Injectable({
  providedIn: 'root'
})

export class FacadeService {

  constructor(private store: Store) { }

  public dispatch (){
    this.store.dispatch(actions.loadProducts())
  }
  public getData(){
    return this.store.select(selectors.selectProductsData)
  }

  public loadingFlag (){
    this.store.select(selectors.selectProductsLoading)
  }

  public dispatchUsers (){
    this.store.dispatch(actions.loadUsers())
  }

  public getUsers () {
    return this.store.select(selectors.selectUsers)
  }

  public dispatchEmployee () {
    this.store.dispatch(actions.loadEmployee())
  }

  public getEmployees (){
    return this.store.select(selectors.selectEmployee)
  }
}
