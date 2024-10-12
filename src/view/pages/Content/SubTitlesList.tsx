import { Box } from '@mui/material';

import { setSubtitleId } from '../../../redux/slice/contentSlice';
import { AppDispatch } from '../../../redux/store';
import { hymnsService, subtitlesService } from '../../../services';
import ListItem from '../../components/ListItem';

import FirstStringList from './FirstStringList';
import StyledContentComponents from './styles';

interface ISubTitlesList {
  titleId: number;
  subtitleId: number | null;
  dispatch: AppDispatch;
  scrollToContentTittle: (id: number) => void;
}
const { StyledSubList } = StyledContentComponents;

function SubTitlesList({ titleId, subtitleId, dispatch, scrollToContentTittle }: ISubTitlesList) {
  const filteredSubtitles = subtitlesService.filterSubsByTitleId(titleId);

  function handleSubTitleClick(id: number) {
    dispatch(setSubtitleId(subtitleId === id ? null : id));
    scrollToContentTittle(id);
  }

  return (
    <StyledSubList>
      {filteredSubtitles.map((sub, index) => {
        return (
          <Box key={sub._id}>
            <ListItem
              title={sub.name_upper}
              id={sub._id}
              list={filteredSubtitles}
              index={index}
              onTitleClick={handleSubTitleClick}
              style={{
                fontWeight: subtitleId === sub._id ? 'bold' : undefined,
                fontSize: '15px'
              }}
            />
            {subtitleId === sub._id && (
              <FirstStringList hymnsService={hymnsService} subId={sub._id} dispatch={dispatch} />
            )}
          </Box>
        );
      })}
    </StyledSubList>
  );
}

export default SubTitlesList;
