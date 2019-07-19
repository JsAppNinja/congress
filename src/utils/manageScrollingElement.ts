const freezeStyle = {
  position: 'fixed',
  overflow: 'hidden',
  width: '100%'
};

const unfreezeStyle = {
  position: 'initial',
  overflow: 'auto',
  width: 'auto'
};

const freezeScroll = (saveLastScrollTop: (top: number) => void) => {
  const bodyEl = document.body;
  const currentScrollTop = document.documentElement.scrollTop;
  saveLastScrollTop(currentScrollTop);
  Object.assign(freezeStyle, { top: `-${currentScrollTop}px` });
  Object.assign(bodyEl.style, freezeStyle);
};

const unfreezeScroll = (lastScrollTop: number) => {
  const bodyEl = document.body;
  Object.assign(bodyEl.style, unfreezeStyle);
  document.documentElement.scrollTop = lastScrollTop;
};

export { freezeScroll, unfreezeScroll };
