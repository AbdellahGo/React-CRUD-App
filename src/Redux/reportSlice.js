import { createSlice } from "@reduxjs/toolkit";





const reportSlice = createSlice({
    name: 'report',

    initialState: {
        logs: []
    },

    reducers: {
        insertLogs: (state, action) => {
            state.logs.push(action.payload)
        }
    }
}) 



export const {insertLogs} = reportSlice.actions

export default reportSlice.reducer