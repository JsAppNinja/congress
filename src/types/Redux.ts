import { ApplicationAction } from 'state/actions/types/applicationActionTypes';
import { ContentAction } from 'state/actions/types/contentActionTypes';
import { HeaderAction } from 'state/actions/types/headerActionTypes';
import { LocaleAction } from 'state/actions/types/localeActionTypes';
import { MenuAction } from 'state/actions/types/menuActionTypes';
import { SubnavAction } from 'state/actions/types/subnavActionTypes';

export type Action =
  | ApplicationAction
  | ContentAction
  | HeaderAction
  | LocaleAction
  | MenuAction
  | SubnavAction;
