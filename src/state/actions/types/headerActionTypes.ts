export interface ShowFullHeaderAction {
  type: 'SHOW_FULL_HEADER';
  payload: boolean;
}

export interface HideFullHeaderAction {
  type: 'HIDE_FULL_HEADER';
  payload: boolean;
}

export type HeaderAction = ShowFullHeaderAction | HideFullHeaderAction;
