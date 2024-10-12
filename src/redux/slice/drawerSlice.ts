import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';

interface DrawerState {
  isDrawerOpen: boolean;
}

const initialState: DrawerState = {
  isDrawerOpen: false
};

export const drawerSlice = createSlice({
  name: InitStateNames.drawer,
  initialState,
  reducers: {
    setIsDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    }
  }
});

export const { setIsDrawerOpen } = drawerSlice.actions;

export default drawerSlice.reducer;
