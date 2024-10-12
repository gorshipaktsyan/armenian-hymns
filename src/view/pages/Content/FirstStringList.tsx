import { useNavigate } from 'react-router-dom';

import { setCurrentHymns } from '../../../redux/slice/currentHymnsSlice';
import { AppDispatch } from '../../../redux/store';
import { HymnsService, HymnType } from '../../../types';
import ListItem from '../../components/ListItem';

import StyledContentComponents from './styles';

interface FirstStringList {
  subId: number;
  dispatch: AppDispatch;
  hymnsService: HymnsService;
}

const { StyledFirstStringList } = StyledContentComponents;

export default function FirstStringList({ subId, dispatch, hymnsService }: FirstStringList) {
  const navigate = useNavigate();
  const firstStringList = hymnsService.filterHymnsBySubId(subId);

  function handleHymnClick(id: number) {
    const hymn = hymnsService.findHymn(id);
    if (hymn) {
      dispatch(setCurrentHymns([hymn]));
      navigate(`/hymns/${id}`);
    }
  }

  return (
    <StyledFirstStringList>
      {firstStringList.map((h: HymnType, index: number) => (
        <ListItem
          key={h._id}
          title={h.first_string}
          number={h.number}
          id={h._id}
          list={firstStringList}
          index={index}
          onTitleClick={handleHymnClick}
          style={{
            fontSize: '15px'
          }}
        />
      ))}
    </StyledFirstStringList>
  );
}
