import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export const store = configureStore({
// export default configureStore({
  reducer: {
    user: userReducer,
  },
});
