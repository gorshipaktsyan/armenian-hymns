import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';

import App from '../App';
import { setAppBarTitle } from '../redux/slice/appBarSlice';
import { AppDispatch, RootState } from '../redux/store';
import { setFontSize, setTitle } from '../utils';
import { useDoubleTap } from '../utils/hooks';
import { AppBar, Drawer } from '../view/components';

function Layout() {
  const settings = useSelector((state: RootState) => state.settings);
  const currentHymns = useSelector((state: RootState) => state.currentHymns.currentHymns);
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();

  useDoubleTap({ pathname, fontSize: settings.fontSize, dispatch });

  useEffect(() => {
    setFontSize(settings.fontSize);
  }, [settings.fontSize]);

  useEffect(() => {
    const title = setTitle({
      currentHymns,
      pathname,
      lg: settings.language
    });
    title && dispatch(setAppBarTitle(title));
  }, [currentHymns, pathname, dispatch, settings.language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, currentHymns]);

  return (
    <Box sx={{ height: '100%' }}>
      <AppBar lg={settings.language} />
      <Drawer lg={settings.language} dispatch={dispatch} fontSize={settings.fontSize} />
      <Box className="container">
        <App />
      </Box>
    </Box>
  );
}
export default Layout;
