import { ApplicationAction } from 'state/actions/types/applicationActionTypes';
import { ContentAction } from 'state/actions/types/contentActionTypes';
import { SignupAction } from 'state/actions/types/signupActionTypes';
import { LocaleAction } from 'state/actions/types/localeActionTypes';

export type Action =
  | ApplicationAction
  | ContentAction
  | SignupAction
  | LocaleAction;
