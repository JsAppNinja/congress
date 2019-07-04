import Polyglot from 'node-polyglot';
import { Locale } from 'types/Locale';
import en from 'constants/Locales/en-US';
import fr from 'constants/Locales/fr';

const locales: { [id: string]: object } = {
  'en-US': en,
  fr: fr
};

let Language: Polyglot | undefined;
Language = new Polyglot({ locale: 'en-US' });
Language.extend(en);

export const setLocale = (locale: Locale = 'en-US'): void => {
  Language = new Polyglot({ locale });
  Language.extend(locales[locale]);
};

export const getLocale = () => Language;
export type Polyglot = Polyglot;

export default Language;
