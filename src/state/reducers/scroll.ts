import { Action } from 'types/Redux';

export interface ScrollReducer {
  scrollTop: number;
}

const initialState: ScrollReducer = {
  scrollTop: 0
};

export default (
  state: ScrollReducer = initialState,
  action: Action
): ScrollReducer => {
  switch (action.type) {
    case 'SAVE_LAST_SCROLL_TOP':
      return { ...state, scrollTop: action.payload };

    default:
      return state;
  }
};
