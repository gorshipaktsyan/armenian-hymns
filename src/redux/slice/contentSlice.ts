import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';

interface ContentState {
  titleId: number | null;
  subtitleId: number | null;
}

const initialState: ContentState = {
  titleId: null,
  subtitleId: null
};

export const contentSlice = createSlice({
  name: InitStateNames.content,
  initialState,
  reducers: {
    resetContentValues: (state) => {
      state.titleId = null;
      state.subtitleId = null;
    },
    setTitleId: (state, action: PayloadAction<number | null>) => {
      state.titleId = action.payload;
    },
    setSubtitleId: (state, action: PayloadAction<number | null>) => {
      state.subtitleId = action.payload;
    }
  }
});

export const { resetContentValues, setTitleId, setSubtitleId } = contentSlice.actions;

export default contentSlice.reducer;
