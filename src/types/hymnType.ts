export default interface HymnType {
  _id: number;
  number: number;
  number_eng: number;
  text: string;
  html: string;
  first_string: string;
  first_string_sort: string;
  chorus_first_string: string | null;
  chorus_first_string_sort: string | null;
  title: number;
  subtitle: number | null;
  first_letter: string;
  first_letter_chorus: string | null;
  sign: string;
  filteredByFirstLetter?: boolean;
}
