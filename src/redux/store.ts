import {configureStore} from '@reduxjs/toolkit';
import {accountReducer} from './slices/accountSlice';
import {raitingReducer} from './slices/ratingSlice';


const store = configureStore({
  reducer: {
    account: accountReducer,
    raiting: raitingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;
