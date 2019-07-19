export interface saveLastScrollTop {
  type: 'SAVE_LAST_SCROLL_TOP';
  payload: number;
}

export type ScrollAction = saveLastScrollTop;
