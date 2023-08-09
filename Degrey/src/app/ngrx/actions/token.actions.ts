import { createAction, props } from '@ngrx/store';

export const setIdToken = createAction(
  '[Auth] Set ID Token',
  props<{ idToken: string }>()
);