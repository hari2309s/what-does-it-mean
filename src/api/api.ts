import { API_BASE_URL } from '../constants';

export interface IPhonetic {
  text: string;
  audio: string;
  sourceUrl: string;
  license: ILicense;
}

export interface IDefinition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example: string;
}

export interface ILicense {
  name: string;
  url: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: IDefinition[];
  synonyms: string[];
  antonyms: string[];
}

export interface IMeaning {
  word: string;
  phonetic: string;
  phonetics: IPhonetic[];
  meanings: Meaning[];
  license: ILicense;
  sourceUrls: string[];
}

export const getMeaning = async (word: string) => {
  return await fetch(`${API_BASE_URL}${word}`)
    .then((response) => {
      if (response.status === 404) {
        return Promise.reject(response);
      }
      return response.json();
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
