import { User } from '@models';
import { createAction, props } from '@ngrx/store';

export const loginAction = createAction(
  '[Auth] login'
);

export const loginSuccessAction = createAction(
  '[Auth] login success',
  props<{ user: User }>()
);

export const loginFailAction = createAction(
  '[Auth] login fail',
  props<{ error: any }>() // TODO: update
);


