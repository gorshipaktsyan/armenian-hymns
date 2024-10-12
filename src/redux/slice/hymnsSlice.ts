import { createSlice } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';
import { hymnsService } from '../../services';
import { HymnType } from '../../types';

interface HymnsState {
  hymns: HymnType[];
  filteredHymns: HymnType[];
}

const initialState: HymnsState = {
  hymns: hymnsService.get() || [],
  filteredHymns: []
};

export const hymnsSlice = createSlice({
  name: InitStateNames.hymns,
  initialState,
  reducers: {}
});

export default hymnsSlice.reducer;
