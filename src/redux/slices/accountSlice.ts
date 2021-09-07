import {createSlice, PayloadAction} from '@reduxjs/toolkit';


type AccountState = {
    name : string | null;
}

const initialState: AccountState = {
  name: null,
};


const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const accountActions = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
