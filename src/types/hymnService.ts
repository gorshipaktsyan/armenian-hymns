import { HymnType } from '../types';

export default interface HymnsService {
  get(): HymnType[];
  findRandomHymn(): HymnType;
  findHymn(currentNumbers: number[] | number): HymnType | undefined;
  findHymns(currentNumbers: number[]): HymnType[];
  findSearchedHymns(inputtedNumbers: string, property: keyof HymnType): HymnType[];
  findIndex(hymnNumber: number): number;
  findHymnsWithMatchKey(searchedText: string, regExp: string): HymnType[];
  filterHymnsByLetter(letter: string): HymnType[];
  filterHymnsBySubId(subtitleId: number): HymnType[];
  sortHymns(hymnsArray: HymnType[], lg: string): HymnType[];
  getHymnsNumbers(hymns: HymnType[]): number[];
}
