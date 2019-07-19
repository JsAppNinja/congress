import { StatusReducer } from 'state/reducers/status';
import { ContentReducer } from 'state/reducers/content';
import { LocaleReducer } from 'state/reducers/locale';
import { HeaderReducer } from 'state/reducers/header';
import { MenuReducer } from 'state/reducers/menu';
import { ScrollReducer } from 'state/reducers/scroll';

export interface RootReducer {
  status: StatusReducer;
  locale: LocaleReducer;
  content: ContentReducer;
  header: HeaderReducer;
  menu: MenuReducer;
  scroll: ScrollReducer;
}
