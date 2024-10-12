import { useEffect } from 'react';

import { changeFontSize } from '../../redux/slice/settingsSlice';
import { AppDispatch } from '../../redux/store';
import { doubleTap } from '..';

interface IUseDoubleTap {
  pathname: string;
  fontSize: number;
  dispatch: AppDispatch;
}

export default function useDoubleTap({ pathname, fontSize, dispatch }: IUseDoubleTap): void {
  useEffect(() => {
    if (pathname === '/settings') return;
    function handleClick(e: MouseEvent) {
      const newFontSize = doubleTap(e, fontSize);
      if (newFontSize !== fontSize) {
        dispatch(changeFontSize(newFontSize));
      }
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [dispatch, fontSize, pathname]);
}
