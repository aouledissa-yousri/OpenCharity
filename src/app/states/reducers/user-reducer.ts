import { createReducer, on } from "@ngrx/store";
import { clearUserData, storeUserData } from "../actions/user-actions";
import { UserStateInterface } from "../interfaces/UserStateInterface";




export const initialState: UserStateInterface = {
    walletAddress: "",
    username: "",
    profilePic: "",
    donations: {},
    donationCampaigns: {}
}


export const userReducer = createReducer(
    initialState,
    
    on(storeUserData, (state, newState) => ({
        ...state,
        walletAddress: newState.getWalletAddress(),
        username: newState.getUsername(),
        profilePic: newState.getWalletAddress(),
        donations: newState.getDonations(),
        donationCampaigns: newState.getDonationCampaigns()
    })),

    on(clearUserData, (state) => ({
        ...initialState,
    }))
)
