import hymnsService from '../services/hymnsService';
import { HymnType, LanguageTypes } from '../types';

interface FilteredHymns extends FilterProps {
  filteredHymns: HymnType[];
}

interface FilterProps {
  letter: string;
  language: LanguageTypes;
}

export default function filterAndSortHymnsByLetter({ letter, language }: FilterProps): HymnType[] {
  const filteredHymns = hymnsService.filterHymnsByLetter(letter);
  const mappedHymns = mapHymns({ filteredHymns, letter, language });

  const sortedHymns = hymnsService.sortHymns(mappedHymns, language.language);
  return sortedHymns;
}

function mapHymns({ filteredHymns, letter, language }: FilteredHymns): HymnType[] {
  return filteredHymns.map((hymn) => {
    const isFirstLetterMatch = hymn.first_letter === letter;
    const filteredText = removeSymbols(
      isFirstLetterMatch ? hymn.first_string : hymn.chorus_first_string || '',
      language
    );
    return {
      ...hymn,
      filteredByFirstLetter: isFirstLetterMatch,
      filteredText
    };
  });
}

function removeSymbols(text: string, language: LanguageTypes): string {
  return text.replace(language.regExp.onlyLetters, '');
}
