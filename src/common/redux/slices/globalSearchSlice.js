import { createSlice } from "@reduxjs/toolkit";

export const globalSearchSlice = createSlice({
    name: 'globalSearchSlice',
    initialState: {
        type: '',
        location: '',
        modalProperty: '',
    },
    reducers: {
        changeGlobalFields: (state, { payload }) => {
            return {...state, ...payload};
        }
    }
})

export const { changeGlobalFields } = globalSearchSlice.actions;
export default globalSearchSlice.reducer;