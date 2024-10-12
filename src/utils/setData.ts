import { hymnsService } from '../services';
import { HymnType } from '../types';

interface HymnObjectForHistory {
  date: string;
  number: number[];
}
interface HymnObjectForBookmarks {
  date: string;
  number: number;
}
function setDataForHistory(hymns: HymnType[]): HymnObjectForHistory {
  const hymnsNumbers = hymnsService.getHymnsNumbers(hymns);
  const currentDate = new Date().toISOString();
  const hymnObject = { date: currentDate, number: hymnsNumbers };
  return hymnObject;
}
function setDataForBookmarks(value: number): HymnObjectForBookmarks {
  const currentDate = new Date().toISOString();
  const hymnObject = { date: currentDate, number: value };
  return hymnObject;
}

export { setDataForBookmarks, setDataForHistory };
