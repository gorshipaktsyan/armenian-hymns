import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';
import { SearchedHymns } from '../../types';

interface HistoryState {
  searchedHymns: SearchedHymns[];
  isConfirmOpen: boolean;
}

const initialState: HistoryState = {
  searchedHymns: [],
  isConfirmOpen: false
};

export const historySlice = createSlice({
  name: InitStateNames.history,
  initialState,
  reducers: {
    clearHistory: (state) => {
      state.searchedHymns = [];
    },
    addHymn: (state, action: PayloadAction<SearchedHymns>) => {
      state.searchedHymns.unshift(action.payload);
    },
    setIsConfirmOpen: (state, action: PayloadAction<boolean>) => {
      state.isConfirmOpen = action.payload;
    }
  }
});

export const { clearHistory, addHymn, setIsConfirmOpen } = historySlice.actions;

export default historySlice.reducer;
