import { createSlice } from "@reduxjs/toolkit";

const UserdataSlice = createSlice({
    name: 'loginDetail',
    initialState: {
         users: null
    },
    reducers: {
        addLoginUsers: (state, action) => {
            state.users = action.payload;
        },

        clearUsers: (state) => {
            state.users = null
        }

    }
})
export const { addLoginUsers, clearUsers } = UserdataSlice.actions;
export default UserdataSlice.reducer;