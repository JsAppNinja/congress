export interface ShowMobileMenu {
  type: 'SHOW_MOBILE_MENU';
  payload: boolean;
}

export interface HIDE_MOBILE_MENU {
  type: 'HIDE_MOBILE_MENU';
  payload: boolean;
}

export type MenuAction = ShowMobileMenu | HIDE_MOBILE_MENU;
