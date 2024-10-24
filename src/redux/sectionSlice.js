import { createSlice } from "@reduxjs/toolkit";

export const sectionSlice = createSlice({
    name: "section",
    initialState: "home",
    reducers: {
        changeSection: (state, action) => {
            return action.payload;
        },
    },
});

export const { changeSection } = sectionSlice.actions;

export default sectionSlice.reducer;