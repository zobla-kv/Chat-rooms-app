import { createSelector } from '@ngrx/store';
import { AppState } from '@store/models';

export const selectUser = (state: AppState) => state.auth.user;

export const selectUserUsername = createSelector(
  selectUser,
  user => user?.username
);

export const selectUserId = createSelector(
  selectUser,
  user => user?.id
)
