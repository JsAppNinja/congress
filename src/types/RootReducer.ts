import { StatusReducer } from 'state/reducers/status';
import { ContentReducer } from 'state/reducers/content';

export interface RootReducer {
  status: StatusReducer;
  content: ContentReducer;
}
