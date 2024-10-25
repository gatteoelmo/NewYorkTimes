import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: "",
        sort: "relevance",
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },

        setSort: (state, action) => {
            state.sort = action.payload;
        },
    },
});

export const { setSearch, setSort } = searchSlice.actions;

export default searchSlice.reducer;