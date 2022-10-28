import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import globalSlice from './features/globalSlice';
import jobsSlice from './features/jobs/jobsSlice';
import userSlice from './features/user/userSlice';



const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice);

 export const store = configureStore({
    reducer: {
      jobs: jobsSlice,
      global: globalSlice,
      persistedReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  })
  
  export const persistor = persistStore(store)