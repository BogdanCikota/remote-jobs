import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './features/globalSlice';
import jobsSlice from './features/jobs/jobsSlice';

export const store = configureStore({
  reducer: {
    jobs: jobsSlice,
    global: globalSlice
  },
})