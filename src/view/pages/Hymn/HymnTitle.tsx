import { HymnType, LanguageTypes } from '../../../types';

interface HymnTitle {
  currentHymns: HymnType[];
  language: LanguageTypes;
  hymn: HymnType;
}

export default function HymnTitle({ currentHymns, language, hymn }: HymnTitle) {
  return (
    <div className="hymnTitle">
      {currentHymns.length > 1 && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${language.hymn} ${hymn.number}<sup>${hymn.sign}</sup>`
          }}
        />
      )}
    </div>
  );
}
