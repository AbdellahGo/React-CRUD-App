import { createSlice } from "@reduxjs/toolkit";



export const authorSlice = createSlice({
    name: 'author',
    initialState: {
        isLogIn: false,
        userName: 'abdellah'
    },

    reducers: {
        logInOut: (state) => {
            state.isLogIn = !state.isLogIn
        }
    }
})

export const {logInOut} = authorSlice.actions
export default authorSlice.reducer