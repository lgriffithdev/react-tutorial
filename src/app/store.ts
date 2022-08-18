import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from '../services/pokemon';
import { postApi } from '@/services/posts';

export const store = configureStore({
   reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
      [postApi.reducerPath]: postApi.reducer,
   },
   middleware: getDefaultMiddleware =>
       getDefaultMiddleware().concat(pokemonApi.middleware)
           .concat(postApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
