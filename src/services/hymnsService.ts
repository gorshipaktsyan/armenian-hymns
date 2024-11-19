import { hymns } from "../storage";
import { HymnType } from "../types";

class HymnsService {
  private hymns: HymnType[];

  constructor() {
    this.hymns = hymns;
  }
  get(): HymnType[] {
    return this.hymns;
  }

  findRandomHymn(): HymnType {
    const randomIndex = Math.floor(Math.random() * this.hymns.length);
    const hymn = this.hymns[randomIndex];

    return hymn;
  }
  findHymn(currentNumbers: number[] | number): HymnType | undefined {
    if (Array.isArray(currentNumbers)) {
      return hymns.find((h) => currentNumbers.includes(h.number));
    }
    return hymns.find((h) => h.number === currentNumbers);
  }

  findHymns(currentNumbers: number[]): HymnType[] {
    return currentNumbers.map(
      (number) => this.hymns.find((h) => h.number === number) as HymnType
    );
  }

  findSearchedHymns(
    inputtedNumbers: string,
    property: "number" | "number_eng"
  ): HymnType[] {
    const numbers = inputtedNumbers.split(",").map((num) => Number(num.trim()));
    return hymns.filter((h) => numbers.includes(h[property]));
  }

  findIndex(hymnNumber: number): number {
    return hymns.findIndex((el) => el.number === hymnNumber);
  }

  findHymnsWithMatchKey(searchedText: string, regExp: string): HymnType[] {
    const lowerCaseText = searchedText.toLowerCase();
    const regExpOnlyLetters = new RegExp(regExp, "g");
    const textWithoutSpacesAndSymbols = lowerCaseText.replace(
      regExpOnlyLetters,
      ""
    );

    if (textWithoutSpacesAndSymbols === "") return [];

    return this.hymns.filter((hymn) =>
      hymn.html
        .toLowerCase()
        .replace(regExpOnlyLetters, "")
        .includes(textWithoutSpacesAndSymbols)
    );
  }
  filterHymnsByLetter(letter: string): HymnType[] {
    return this.hymns.filter(
      (hymn) =>
        hymn.first_letter === letter ||
        (hymn.first_letter_chorus && hymn.first_letter_chorus === letter)
    );
  }
  filterHymnsBySubId(subtitleId: number): HymnType[] {
    return this.hymns.filter((hymn) => hymn.subtitle === subtitleId);
  }
  sortHymns(hymnsArray: HymnType[], lg: string): HymnType[] {
    return hymnsArray.sort((a, b) =>
      a.text.localeCompare(b.text, lg, {
        sensitivity: "base",
      })
    );
  }
  getHymnsNumbers(hymns: HymnType[]): number[] {
    return hymns.map((hymn) => hymn.number);
  }
}

const hymnsService = new HymnsService();

export default hymnsService;
