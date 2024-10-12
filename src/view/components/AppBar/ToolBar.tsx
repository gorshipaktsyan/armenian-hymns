import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Bookmark, BookmarkBorder, Menu } from '@mui/icons-material/';
import { Box, IconButton, Toolbar } from '@mui/material';

import { setIsSaved } from '../../../redux/slice/appBarSlice';
import { removeHymn, saveHymn } from '../../../redux/slice/bookmarksSlice';
import { setIsDrawerOpen } from '../../../redux/slice/drawerSlice';
import {
  copyToClipboard,
  formatDataForBookmarks,
  setDataForBookmarks,
  showBookmark
} from '../../../utils';
import { useSelector } from '../../../utils/hooks';
import SearchBar from '../SearchBar';

interface IToolBar {
  setCopyAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToolBar({ setCopyAlert }: IToolBar) {
  const { currentHymns } = useSelector((state) => state.currentHymns);
  const { isDrawerOpen } = useSelector((state) => state.drawer);
  const { foundHymns } = useSelector((store) => store.search);
  const { title, isSaved } = useSelector((state) => state.appBar);
  const { savedHymns } = useSelector((state) => state.bookmarks);
  const { language } = useSelector((state) => state.settings);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const currentHymnNumber = currentHymns.length < 2 ? currentHymns[0]?.number : null;

  useEffect(() => {
    if (currentHymnNumber) {
      const formattedData = formatDataForBookmarks({ hymns: savedHymns, language });
      const isBookmarked = showBookmark({
        formattedData,
        currentHymnNumber
      });
      dispatch(setIsSaved(isBookmarked));
    }
  }, [currentHymnNumber, savedHymns, dispatch, language]);

  function handleBookmarkClick() {
    if (currentHymnNumber) {
      if (isSaved) {
        dispatch(removeHymn(currentHymnNumber));
        dispatch(setIsSaved(false));
      } else {
        const hymnObject = setDataForBookmarks(currentHymnNumber);
        dispatch(saveHymn(hymnObject));
        dispatch(setIsSaved(true));
      }
    }
  }

  function handleTitleClick() {
    if (pathname.includes(`/hymns`)) {
      copyToClipboard(window.location.href);
      setCopyAlert(true);
    }
  }

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={() => dispatch(setIsDrawerOpen(!isDrawerOpen))}>
        <Menu sx={{ fontSize: '30px' }} />
      </IconButton>
      <Box
        sx={{
          fontSize: '20px',
          cursor: pathname.includes(`/hymns`) ? 'pointer' : 'default'
        }}
        dangerouslySetInnerHTML={{ __html: title }}
        onClick={handleTitleClick}
      />
      <Box
        sx={{
          flexGrow: '1'
        }}>
        {(pathname !== '/' || !!foundHymns.length) && <SearchBar />}
      </Box>
      {pathname.includes(`/hymns`) && (
        <>
          <IconButton color="inherit" onClick={handleBookmarkClick}>
            {currentHymnNumber &&
              (isSaved ? (
                <Bookmark sx={{ fontSize: '30px' }} />
              ) : (
                <BookmarkBorder sx={{ fontSize: '30px' }} />
              ))}
          </IconButton>
        </>
      )}
    </Toolbar>
  );
}
