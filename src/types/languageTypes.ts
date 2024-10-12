export default interface LanguageTypes {
  hymns: string;
  hymn: string;
  version: string;
  language: string;
  noData: string;
  regExp: {
    onlyLetters: string;
  };
  navItems: {
    hymns_1_800: string;
    alphabeticalIndex: string;
    content: string;
    history: string;
    bookmark: string;
    preface: string;
    reference: string;
    AboutTheApp: string;
    settings: string;
  };
  search: {
    searchByArmenianNumber: string;
    searchByEnglishNumber: string;
    searchByText: string;
    search: string;
    errorAlert: string;
  };
  appBar: {
    copyAlert: string;
  };
  about: {
    overview: string;
    asteriskNote: string;
    crossNote: string;
    numbering: string;
    contact: string;
    officialSite: string;
    collectorBook: string;
    rightsReserved: string;
  };
  alphabeticalIndex: {
    alphabet: string[];
    alphabeticalIndex: string;
  };
  history: {
    deleteHistory: string;
    dialog: string;
    yes: string;
    no: string;
  };
  preface: {
    preface: string;
    introduction: string;
    goals: string[];
    churchExistence: string;
    inclusion: string;
    lordRestoration: string;
    hymnSelection: string;
    forSatisfaction: string;
    hymnDivisions: string;
    index: string;
    melodies: string;
    attention: string;
    distractions: string;
    gratitudeToPublishers: string;
    permissions: string;
    encouragement: string;
    gratitudeToBrothersAndSisters: string;
    usage: string;
    continuousFlow: string;
    authors: string;
    names: string;
    location: string;
    date: string;
  };
  reference: {
    search: {
      heading: string;
      mobileLocation: string;
      searchFields: string;
    };
    navigation: {
      heading: string;
      hymnNavigation: string;
    };
    mainMenu: {
      heading: string;
      openMenu: string;
    };
    alphabeticalIndex: {
      heading: string;
      indexDescription: string;
    };
    content: {
      heading: string;
      description: string;
    };
    history: {
      heading: string;
      description: string;
    };
    bookmarks: {
      heading: string;
      description: string;
    };
    settings: {
      heading: string;
      description: string;
    };
    appUpdate: {
      heading: string;
      description: string;
    };
    melodyPlayback: {
      heading: string;
      description: string;
    };
  };
  settings: {
    fontSize: string;
    arrows: string;
    off: string;
    on: string;
    searchByEnglishNumber: string;
  };
}
