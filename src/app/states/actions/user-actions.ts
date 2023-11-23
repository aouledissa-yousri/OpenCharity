import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/User";

export const storeUserData = createAction('store', props<User>())
export const clearUserData = createAction('remove', props<User>())