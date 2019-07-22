import { Action } from 'types/Redux';

export interface SubNavReducer {
  mobileSubnavIsShown: boolean;
}

const initialState: SubNavReducer = {
  mobileSubnavIsShown: false
};

export default (
  state: SubNavReducer = initialState,
  action: Action
): SubNavReducer => {
  switch (action.type) {
    case 'SHOW_MOBILE_SUBNAV':
      return { ...state, mobileSubnavIsShown: action.payload };
    case 'HIDE_MOBILE_SUBNAV':
      return { ...state, mobileSubnavIsShown: action.payload };
    default:
      return state;
  }
};
