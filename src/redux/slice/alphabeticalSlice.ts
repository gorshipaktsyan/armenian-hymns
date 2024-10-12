import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';

interface AlphabeticalIndexState {
  letter: string;
}

const initialState: AlphabeticalIndexState = {
  letter: ''
};

export const alphabeticalIndexSlice = createSlice({
  name: InitStateNames.alphabeticalIndex,
  initialState,
  reducers: {
    setLetter: (state, action: PayloadAction<string>) => {
      state.letter = action.payload;
    }
  }
});

export const { setLetter } = alphabeticalIndexSlice.actions;

export default alphabeticalIndexSlice.reducer;
