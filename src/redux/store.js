import { configureStore } from '@reduxjs/toolkit';
import sectionReducer from './sectionSlice';


export const store = configureStore({
  reducer: {
    section: sectionReducer,
  },
});