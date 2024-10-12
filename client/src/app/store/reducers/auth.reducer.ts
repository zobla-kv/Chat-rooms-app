import { createReducer, on } from "@ngrx/store";

import { loginSuccessAction, loginFailAction } from "@store/actions";

import { AuthState } from "@store/models";

export const initialAuthState: AuthState = {
  user: null
};

export const authReducer = createReducer(
  initialAuthState,
  on(loginSuccessAction, (state: AuthState, { user }) => {
    console.log('login success action state: ', state)
    console.log('login success action user: ', user)
    return { ...state, user };
  }),
  on(loginFailAction, (state, { error }) => {
    console.log('inside login fail reducer: ', state);
    console.log('inside login fail error: ', error);
    return {
      ...state,
      // error,
      user: null
    }
  })
)
