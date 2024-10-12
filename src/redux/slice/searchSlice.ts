import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';
import { HymnType } from '../../types';

interface SearchState {
  foundHymns: HymnType[];
}

const initialState: SearchState = {
  foundHymns: []
};

export const searchSlice = createSlice({
  name: InitStateNames.search,
  initialState,
  reducers: {
    setFoundHymns: (state, action: PayloadAction<HymnType[]>) => {
      state.foundHymns = action.payload;
    }
  }
});

export const { setFoundHymns } = searchSlice.actions;

export default searchSlice.reducer;
