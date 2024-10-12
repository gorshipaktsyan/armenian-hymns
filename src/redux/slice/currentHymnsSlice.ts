import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';
import { HymnType } from '../../types';

interface currentHymnsState {
  currentHymns: HymnType[];
}

const initialState: currentHymnsState = {
  currentHymns: []
};

export const currentHymnsSlice = createSlice({
  name: InitStateNames.currentHymns,
  initialState,
  reducers: {
    setCurrentHymns: (state, action: PayloadAction<HymnType[]>) => {
      state.currentHymns = action.payload;
    }
  }
});

export const { setCurrentHymns } = currentHymnsSlice.actions;

export default currentHymnsSlice.reducer;
