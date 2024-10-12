import { hymnsService } from '../services';
import { HymnType, LanguageTypes } from '../types';

import createNavItems from './createNavItems';

interface SetTitle {
  currentHymns: HymnType[];
  pathname: string;
  lg: LanguageTypes;
}

export default function setTitle({ currentHymns, pathname, lg }: SetTitle): string | undefined {
  let newTitle;
  const currentHymnNumbers = hymnsService.getHymnsNumbers(currentHymns);
  if (currentHymnNumbers.length && pathname === `/hymns/${currentHymnNumbers}`) {
    if (currentHymnNumbers.length > 1) {
      newTitle = `${lg.hymns} ${currentHymnNumbers.slice(0, 3).map((number) => ' ' + number)}${
        currentHymnNumbers.length > 3 ? ' ...' : ''
      }`;
    } else {
      const currentHymn = hymnsService.findHymn(currentHymnNumbers);
      newTitle = `${lg.hymn} ${currentHymnNumbers}<sup>${currentHymn?.sign || ''}</sup>`;
    }

    return newTitle;
  } else {
    const navItems = createNavItems(lg);
    const selectedItem = navItems.find((item) => `/${item.route}` === pathname);
    return selectedItem && selectedItem.title;
  }
}
