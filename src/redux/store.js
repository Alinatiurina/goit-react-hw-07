import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { contactReducer } from "./contactsSlice";
import filtersReducer  from "./filtersSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const contactPersistConfig = {
  key: 'contactValue',
  storage,
}

const pContactReducer=persistReducer(contactPersistConfig,contactReducer)

export const store = configureStore({
  reducer: {
    contacts: pContactReducer,
    filters: filtersReducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);