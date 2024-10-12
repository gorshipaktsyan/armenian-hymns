import FormattedDataType from '../types/formattedDataType';

interface showBookmark {
  formattedData: FormattedDataType[];
  currentHymnNumber: number | null;
}

export default function showBookmark({ formattedData, currentHymnNumber }: showBookmark): boolean {
  if (currentHymnNumber && formattedData.length) {
    const isSaved = formattedData.some((day) =>
      day.hymns.some((h) => h.number === currentHymnNumber)
    );
    return isSaved;
  }
  return false;
}
