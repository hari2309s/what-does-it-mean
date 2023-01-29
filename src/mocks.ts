import { IMeaning } from './api/api';

export const mockedMeaning: IMeaning = {
  word: 'laugh',
  phonetic: '/laːf/',
  phonetics: [
    { text: '/laːf/', audio: '' },
    { text: '/lɑːf/', audio: '' },
    {
      text: '/læf/',
      audio:
        'https://api.dictionaryapi.dev/media/pronunciations/en/laugh-us.mp3',
      sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=275476',
    },
  ],
  meanings: [
    {
      partOfSpeech: 'noun',
      definitions: [
        {
          definition:
            'An expression of mirth particular to the human species; the sound heard in laughing; laughter.',
          synonyms: [],
          antonyms: [],
          example: 'His deep laughs boomed through the room.',
        },
        {
          definition: 'Something that provokes mirth or scorn.',
          synonyms: [],
          antonyms: [],
          example: "Your new hat's an absolute laugh, dude.",
        },
        { definition: 'A fun person.', synonyms: [], antonyms: [] },
      ],
      synonyms: [
        'cachinnation',
        'cackle',
        'chortle',
        'chuckle',
        'giggle',
        'guffaw',
        'snicker',
        'snigger',
        'titter',
        'joke',
        'laughing stock',
      ],
      antonyms: [],
    },
    {
      partOfSpeech: 'verb',
      definitions: [
        {
          definition:
            'To show mirth, satisfaction, or derision, by peculiar movement of the muscles of the face, particularly of the mouth, causing a lighting up of the face and eyes, and usually accompanied by the emission of explosive or chuckling sounds from the chest and throat; to indulge in laughter.',
          synonyms: [],
          antonyms: [],
          example:
            'There were many laughing children running on the school grounds.',
        },
        {
          definition:
            'To be or appear cheerful, pleasant, mirthful, lively, or brilliant; to sparkle; to sport.',
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            '(followed by "at") To make an object of laughter or ridicule; to make fun of; to deride; to mock.',
          synonyms: [],
          antonyms: [],
          example: "Don't laugh at my new hat, man!",
        },
        {
          definition:
            'To affect or influence by means of laughter or ridicule.',
          synonyms: [],
          antonyms: [],
        },
        {
          definition: 'To express by, or utter with, laughter.',
          synonyms: [],
          antonyms: [],
        },
      ],
      synonyms: [
        'cackle',
        'chortle',
        'chuckle',
        'giggle',
        'guffaw',
        'snicker',
        'snigger',
        'titter',
      ],
      antonyms: ['cry', 'weep'],
    },
  ],
  license: {
    name: 'CC BY-SA 3.0',
    url: 'https://creativecommons.org/licenses/by-sa/3.0',
  },
  sourceUrls: ['https://en.wiktionary.org/wiki/laugh'],
};
