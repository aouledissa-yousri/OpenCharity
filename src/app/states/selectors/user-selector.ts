import { createSelector, select } from "@ngrx/store";
import { UserStateInterface } from "../interfaces/UserStateInterface";


export const selectAllUserData = select((state: UserStateInterface) => state)