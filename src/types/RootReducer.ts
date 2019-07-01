import { StatusReducer } from 'state/reducers/status';
import { ContentReducer } from 'state/reducers/content';
import { SignupReducer } from 'state/reducers/signup';

export interface RootReducer {
  status: StatusReducer;
  content: ContentReducer;
  signup: SignupReducer;
}
