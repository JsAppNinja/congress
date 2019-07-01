import { Action } from 'types/Redux';

export interface SignupReducer {
  signupIsShown: boolean;
}

const initialState: SignupReducer = {
  signupIsShown: true
};

export default (
  state: SignupReducer = initialState,
  action: Action
): SignupReducer => {
  switch (action.type) {
    case 'SHOW_SIGNUP':
      return { ...state, signupIsShown: action.payload };
    case 'HIDE_SIGNUP':
      return { ...state, signupIsShown: action.payload };

    default:
      return state;
  }
};
