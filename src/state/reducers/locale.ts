import { Action } from 'types/Redux';
import { Locale } from 'types/Locale';

export interface LocaleReducer {
  currentLocale: Locale;
}

const initialState: LocaleReducer = {
  currentLocale: 'en-US'
};

export default (
  state: LocaleReducer = initialState,
  action: Action
): LocaleReducer => {
  switch (action.type) {
    case 'SET_LOCALE':
      return { ...state, currentLocale: action.payload };

    default:
      return state;
  }
};
