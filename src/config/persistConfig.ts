import storage from 'redux-persist/lib/storage';

import { armenian, InitStateNames } from './constants';

const persistConfig = {
  key: armenian.key,
  storage,
  whitelist: [InitStateNames.bookmarks, InitStateNames.history, InitStateNames.settings]
};

export default persistConfig;
