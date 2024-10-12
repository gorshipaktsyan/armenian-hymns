import { NavigateFunction } from 'react-router-dom';

import { setCurrentHymns } from '../../../redux/slice/currentHymnsSlice';
import { AppDispatch } from '../../../redux/store';
import { hymnsService } from '../../../services';
import { HymnType } from '../../../types';
import ListItem from '../../components/ListItem';
import { StyledComponents } from '../../styles';

interface SearchedHymnList {
  foundHymns: HymnType[];
  navigate: NavigateFunction;
  dispatch: AppDispatch;
}

const { StyledList, StyledBox } = StyledComponents;

function SearchedHymnList({ foundHymns, navigate, dispatch }: SearchedHymnList) {
  function handleClick(id: number) {
    const hymn = hymnsService.findHymn(id);
    if (hymn) {
      dispatch(setCurrentHymns([hymn]));
      navigate(`/hymns/${id}`);
    }
  }

  return (
    <StyledBox>
      <StyledList>
        {foundHymns.map((h, index) => (
          <ListItem
            key={h.number}
            title={h?.first_string}
            number={h.number}
            id={h.number}
            list={foundHymns}
            index={index}
            onTitleClick={handleClick}
          />
        ))}
      </StyledList>
    </StyledBox>
  );
}
export default SearchedHymnList;
