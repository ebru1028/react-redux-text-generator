import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

const adapter = createEntityAdapter();

export const textGeneratorSelectors = adapter.getSelectors((state) => state.textGenerator);

export const getAllParagraphs = createAsyncThunk('paragraph/getParagraphs', async (data) => {

    const res = await axios(
        `https://baconipsum.com/api/?type=all-meat&paras=${data.inputValue}&start-with-lorem=1&format=${data.format}`
        );
    return res.data;
});

const textGeneratorSlice = createSlice({
    name: 'pragraphs',
    initialState: adapter.getInitialState(),
    reducers: {
    },

    extraReducers: {
        [getAllParagraphs.fulfilled]: (state, action) => {
            adapter.removeAll(state);
            adapter.addOne(state, action.payload);
        },
    },
});

export default textGeneratorSlice.reducer;