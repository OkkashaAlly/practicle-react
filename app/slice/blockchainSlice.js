import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    account: null,
    provider: null
}

const blockchainSlice = createSlice ({
    name: 'blockchain',
    initialState,
    reducers: {
        updateData: (state, action) => {
            if(action.payload) {
                state.account = action.payload.account
                state.provider = action.payload.provider
            } else {
                state.account = null
                state.provider = null
            }
        }
    }
})

export const { updateData } = blockchainSlice.actions

export default blockchainSlice.reducer