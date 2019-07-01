export interface ShowSignupAction {
  type: 'SHOW_SIGNUP';
  payload: boolean;
}

export interface HideSignupAction {
  type: 'HIDE_SIGNUP';
  payload: boolean;
}

export type SignupAction = ShowSignupAction | HideSignupAction;
