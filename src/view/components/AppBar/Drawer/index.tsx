import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Box, List, ListItem, ListItemButton } from '@mui/material';

import { setLetter } from '../../../../redux/slice/alphabeticalSlice';
import { setAppBarTitle } from '../../../../redux/slice/appBarSlice';
import { resetContentValues } from '../../../../redux/slice/contentSlice';
import { setIsDrawerOpen } from '../../../../redux/slice/drawerSlice';
import { AppDispatch, RootState } from '../../../../redux/store';
import { LanguageTypes } from '../../../../types';
import { createNavItems } from '../../../../utils';

import DrawerStyledComponents from './styles';

interface DrawerComponent {
  fontSize: number;
  dispatch: AppDispatch;
  lg: LanguageTypes;
}

const { StyledDrawer, StyledBox, StyledVersionText } = DrawerStyledComponents;

function DrawerComponent({ fontSize, dispatch, lg }: DrawerComponent) {
  const { isDrawerOpen } = useSelector((state: RootState) => state.drawer);
  const navigate = useNavigate();

  function handleNavigate(item: { title: string; route: string }) {
    navigate(`/${item.route}`);
    dispatch(setAppBarTitle(item.title));
    dispatch(setIsDrawerOpen(false));
    dispatch(resetContentValues());
    dispatch(setLetter(''));
  }

  const navItems = createNavItems(lg);
  return (
    <StyledDrawer
      variant="temporary"
      open={isDrawerOpen}
      onClose={() => dispatch(setIsDrawerOpen(false))}
      ModalProps={{
        keepMounted: true
      }}>
      <StyledBox>
        <List>
          {navItems.slice(1).map((item) => (
            <ListItem key={item.title} disablePadding onClick={() => handleNavigate(item)}>
              <ListItemButton>
                <Box sx={{ fontSize: `${fontSize}em` }}>{item.title}</Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </StyledBox>
      <StyledVersionText>
        <p>{lg.version}: 1.0.0</p>
      </StyledVersionText>
    </StyledDrawer>
  );
}

export default DrawerComponent;
