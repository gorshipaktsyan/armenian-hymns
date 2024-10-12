import hymnsService from '../services/hymnsService';
import { HymnType, SearchedHymns } from '../types';

export default function findInStore(hymns: HymnType[], data: SearchedHymns[]): boolean {
  if (data.length && hymns.length) {
    const hymnsNumbers = hymnsService.getHymnsNumbers(hymns);
    const hasNumber = data.some((currentDay) =>
      currentDay.number.some((number: number) => hymnsNumbers.includes(number))
    );
    return hasNumber;
  }
  return false;
}
