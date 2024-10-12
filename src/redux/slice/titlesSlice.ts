import { createSlice } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';
import { titlesService } from '../../services';
import { Titles } from '../../types';

interface TitlesState {
  titles: Titles[];
}

const initialState: TitlesState = {
  titles: titlesService.get() || []
};

export const titlesSlice = createSlice({
  name: InitStateNames.titles,
  initialState,
  reducers: {}
});

export default titlesSlice.reducer;
