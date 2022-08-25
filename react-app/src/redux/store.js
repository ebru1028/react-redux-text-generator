import { configureStore } from '@reduxjs/toolkit';
import textGeneratorSlice from './textGenerator/textGeneratorSlice';

export const store = configureStore({
    reducer: {
      textGenerator: textGeneratorSlice,
    }
});