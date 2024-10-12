import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addHymn } from '../../redux/slice/historySlice';
import { RootState } from '../../redux/store';
import { HymnType } from '../../types';
import { findInStore, setDataForHistory } from '..';

export default function useAddToHistory(currentHymns: HymnType[]): { timeOnPage: number } {
  const dispatch = useDispatch();
  const [timeOnPage, setTimeOnPage] = useState(0);
  const history = useSelector((state: RootState) => state.history.searchedHymns);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout;
    const hasNumber = findInStore(currentHymns, history);

    if (!hasNumber) {
      timerInterval = setInterval(() => {
        setTimeOnPage((prevTime) => prevTime + 1);
      }, 1000);
    }
    if (timeOnPage >= 30 && !hasNumber) {
      const hymnsArray = Array.isArray(currentHymns) ? currentHymns : [currentHymns];
      const hymnObject = setDataForHistory(hymnsArray);
      dispatch(addHymn(hymnObject));
      setTimeOnPage(0);
    }
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [currentHymns, timeOnPage, dispatch, history]);

  return { timeOnPage };
}
