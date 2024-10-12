import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';

interface AppBarState {
  title: string;
  isSaved: boolean;
}

const initialState: AppBarState = {
  title: '',
  isSaved: false
};

export const appBarSlice = createSlice({
  name: InitStateNames.appBar,
  initialState,
  reducers: {
    setAppBarTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setIsSaved: (state, action: PayloadAction<boolean>) => {
      state.isSaved = action.payload;
    }
  }
});

export const { setAppBarTitle, setIsSaved } = appBarSlice.actions;

export default appBarSlice.reducer;
