export interface ProductsState {
  data: [];
  loading: boolean;
  error: null;
}

export const initialState: ProductsState = {
  data: [],
  loading: false,
  error: null,
};

export interface UsersState {
  data : []
}

export const usersState : UsersState = {
  data : []
}
