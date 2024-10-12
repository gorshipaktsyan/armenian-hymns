import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import { setCurrentHymns } from '../../../redux/slice/currentHymnsSlice';
import { RootState } from '../../../redux/store';
import { hymnsService } from '../../../services';
import { useAddToHistory, useSwipeNavigation } from '../../../utils/hooks';

import Arrows from './Arrows';
import HymnTitle from './HymnTitle';
import HymnStyledComponents from './styles';

import './index.scss';

const { StyledDivider } = HymnStyledComponents;

function Hymn() {
  const { number } = useParams();
  const { isAllowToUseArrows, isMobile, language } = useSelector(
    (state: RootState) => state.settings
  );
  const { currentHymns } = useSelector((state: RootState) => state.currentHymns);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useAddToHistory(currentHymns);

  const { handleLeftSwipe, handleRightSwipe, handlers } = useSwipeNavigation({
    currentHymns,
    navigate
  });

  useEffect(() => {
    if (number) {
      const hymns = hymnsService.findHymns(number.split(',').map(Number));
      dispatch(setCurrentHymns(hymns));
    }
  }, [number, dispatch]);

  return (
    <>
      <Box
        className="hymns-page-wrapper"
        sx={{
          paddingBottom: '200px'
        }}
        {...handlers}>
        {currentHymns?.map((hymn, index) => {
          return (
            <Box key={index}>
              <HymnTitle currentHymns={currentHymns} language={language} hymn={hymn} />
              <Box dangerouslySetInnerHTML={{ __html: hymn?.html }} />
              <Arrows
                isAllowToUseArrows={isAllowToUseArrows}
                isMobile={isMobile}
                handleLeftSwipe={handleLeftSwipe}
                handleRightSwipe={handleRightSwipe}
              />
              {index !== currentHymns.length - 1 && <StyledDivider />}
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default Hymn;
