import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//action
export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    return response.json();
})

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        isError: false,
        data: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log("Error: ", action.payload);
            state.isError = true;
        });
    }
})

export default todoSlice.reducer;