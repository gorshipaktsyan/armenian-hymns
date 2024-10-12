import { createSlice } from '@reduxjs/toolkit';

import { InitStateNames } from '../../config/constants';
import { subtitlesService } from '../../services';
import { Subtitles } from '../../types';

interface SubtitlesState {
  subtitles: Subtitles[];
}
const initialState: SubtitlesState = {
  subtitles: subtitlesService.get() || []
};

export const subtitlesSlice = createSlice({
  name: InitStateNames.subtitles,
  initialState,
  reducers: {}
});

export default subtitlesSlice.reducer;
