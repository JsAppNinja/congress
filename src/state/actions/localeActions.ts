import { Locale } from 'types/Locale';
import { setLocale as setPolyglotLocale } from 'constants/Locales';

export const setLocale = (locale: Locale = 'en-US') => {
  setPolyglotLocale(locale);

  return {
    type: 'SET_LOCALE',
    payload: locale
  };
};
