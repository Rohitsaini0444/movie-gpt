import { createSlice } from "@reduxjs/toolkit";
const gptSearchSlice = createSlice({
    name : "gptSearch",
    initialState: {
        gptSearchEnabled: false
    },
    reducers: {
        toggleGPTSearch:(state)=>{
            state.gptSearchEnabled = !state.gptSearchEnabled;
        }
    }
})
export const {toggleGPTSearch} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;