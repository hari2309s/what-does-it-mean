import { useEffect, useState } from 'react';
import { IMeaning, IPhonetic } from '../api/api';

export interface NormalizedMeaning extends Omit<IMeaning, 'phonetic'> {
  hasPhonetic: boolean;
  phonetic: Partial<IPhonetic>;
}

export default function useNormalizeMeaning(
  meaning: IMeaning
): NormalizedMeaning | null {
  const [normalizedMeaning, setNormalizedMeaning] =
    useState<NormalizedMeaning | null>(null);

  useEffect(() => {
    if (meaning) {
      const getPhonetic = () => {
        const phonetic: Partial<IPhonetic> = {
          text:
            meaning.phonetic ??
            meaning.phonetics?.find((phonetic) => !!phonetic.text)?.text,
          audio: meaning.phonetics?.find((phonetic) => !!phonetic.audio)?.audio,
          sourceUrl: meaning.phonetics?.find((phonetic) => !!phonetic.sourceUrl)
            ?.sourceUrl,
          license: meaning.phonetics?.find((phonetic) => !!phonetic.license)
            ?.license,
        };

        return phonetic;
      };

      const result: NormalizedMeaning = meaning && {
        ...meaning,
        hasPhonetic: !!meaning.phonetic || !!(meaning.phonetics.length > 0),
        phonetic: getPhonetic(),
      };

      setNormalizedMeaning({
        ...meaning,
        ...result,
      });
    }
  }, [meaning]);

  return normalizedMeaning;
}
