import { StatusReducer } from 'state/reducers/status';
import { ContentReducer } from 'state/reducers/content';
import { LocaleReducer } from 'state/reducers/locale';
import { SignupReducer } from 'state/reducers/signup';

export interface RootReducer {
  status: StatusReducer;
  locale: LocaleReducer;
  content: ContentReducer;
  signup: SignupReducer;
}
