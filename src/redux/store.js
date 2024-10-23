import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    // qui aggiungerai i tuoi reducers in un secondo momento
  },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});