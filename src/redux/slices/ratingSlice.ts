import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RaitingType} from '../../types';

type StateType = {
    raiting: RaitingType[]
}

const initialState: StateType = {
  raiting: [],
};


const raitingSlice = createSlice({
  name: 'raiting',
  initialState,
  reducers: {
    addRaiting(state, action: PayloadAction<RaitingType>) {
      state.raiting.push(action.payload);
    },
  },
});


export const raitingActions = raitingSlice.actions;
export const raitingReducer = raitingSlice.reducer;

