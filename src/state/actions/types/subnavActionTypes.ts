export interface ShowMobileSubNav {
  type: 'SHOW_MOBILE_SUBNAV';
  payload: boolean;
}

export interface HideMobileSubNav {
  type: 'HIDE_MOBILE_SUBNAV';
  payload: boolean;
}

export type SubnavAction = ShowMobileSubNav | HideMobileSubNav;
