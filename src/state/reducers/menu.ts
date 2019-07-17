import { Action } from 'types/Redux';

export interface MenuReducer {
  mobileMenuIsShown: boolean;
}

const initialState: MenuReducer = {
  mobileMenuIsShown: false
};

export default (
  state: MenuReducer = initialState,
  action: Action
): MenuReducer => {
  switch (action.type) {
    case 'SHOW_MOBILE_MENU':
      return { ...state, mobileMenuIsShown: action.payload };
    case 'HIDE_MOBILE_MENU':
      return { ...state, mobileMenuIsShown: action.payload };
    default:
      return state;
  }
};
