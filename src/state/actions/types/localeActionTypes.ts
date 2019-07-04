import { Locale } from 'types/Locale';

export interface SetLocale {
  type: 'SET_LOCALE';
  payload: Locale;
}

export type LocaleAction = SetLocale;
