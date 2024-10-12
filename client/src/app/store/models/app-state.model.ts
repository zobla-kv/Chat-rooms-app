import { User } from "@models";
import { ActionReducerMap } from "@ngrx/store";

import { authReducer } from "@store/reducers";

export interface AppState {
  auth: AuthState;
}

export interface AuthState {
  user: User | null;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};


export interface ChatFeature {
  roomId: string;
  users: string[]; // TODO: update
  messages: string[]; // TODO: update
}


