import { Dispatch } from 'redux';

import { Locale } from 'types/Locale';
import { setLocale as setPolyglotLocale } from 'constants/Locales';
import {
  fetchMainContent,
  fetchGlobalContent
} from 'state/actions/contentActions';

export const setLocale = (locale: Locale = 'en-US') => (dispatch: Dispatch) => {
  setPolyglotLocale(locale);
  dispatch(fetchMainContent());
  dispatch(fetchGlobalContent());

  return {
    type: 'SET_LOCALE',
    payload: locale
  };
};
