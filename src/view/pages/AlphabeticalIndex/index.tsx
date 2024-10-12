import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setAppBarTitle } from '../../../redux/slice/appBarSlice';
import { setCurrentHymns } from '../../../redux/slice/currentHymnsSlice';
import { RootState } from '../../../redux/store';
import { hymnsService } from '../../../services';
import { StyledComponents } from '../../styles';

import Alphabet from './Alphabet';
import HymnsList from './HymnsList';

const { StyledBox } = StyledComponents;

function AlphabeticalIndex() {
  const { language } = useSelector((state: RootState) => state.settings);
  const { letter } = useSelector((state: RootState) => state.alphabeticalIndex);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    letter &&
      dispatch(setAppBarTitle(`${language.alphabeticalIndex.alphabeticalIndex} (${letter})`));
  }, [letter]);

  function handleTitleClick(id: number): void {
    const hymn = hymnsService.findHymn(id);
    if (hymn) {
      dispatch(setCurrentHymns([hymn]));
      navigate(`/hymns/${id}`);
    }
  }

  return (
    <StyledBox>
      {letter ? (
        <HymnsList language={language} letter={letter} handleTitleClick={handleTitleClick} />
      ) : (
        <Alphabet dispatch={dispatch} language={language} />
      )}
    </StyledBox>
  );
}

export default AlphabeticalIndex;
