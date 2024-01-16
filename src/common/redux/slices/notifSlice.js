import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

export const notifSlice = createSlice({
    name: 'notifSlice',
    initialState: [],
    reducers: {
        pushNotification: (state, { payload }) => {
            state.push(payload);
        },
        popNotification: (state) => {
            state.pop();
        },
    }
})

export const { pushNotification, popNotification } = notifSlice.actions;
export default notifSlice.reducer;