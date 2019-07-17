import { Action } from 'types/Redux';

export interface HeaderReducer {
  fullHeaderIsShown: boolean;
}

const initialState: HeaderReducer = {
  fullHeaderIsShown: false
};

export default (
  state: HeaderReducer = initialState,
  action: Action
): HeaderReducer => {
  switch (action.type) {
    case 'SHOW_FULL_HEADER':
      return { ...state, fullHeaderIsShown: action.payload };
    case 'HIDE_FULL_HEADER':
      return { ...state, fullHeaderIsShown: action.payload };
    default:
      return state;
  }
};
