import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    account: null,
    provider: null,
    balance: 0
}

const blockchainSlice = createSlice ({
    name: 'blockchain',
    initialState,
    reducers: {
        updateData: (state, action) => {
            if(action.payload) {
                state.account = action.payload.account
                state.provider = action.payload.provider
                state.balance = action.payload.balance
            } else {
                state.account = null
                state.provider = null
                state.balance = 0
            }
        }
    }
})

export const { updateData } = blockchainSlice.actions

export default blockchainSlice.reducer