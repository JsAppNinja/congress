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

let lastScrollTop = 0;

const freezeScroll = () => {
  const bodyEl = document.body;
  lastScrollTop = document.documentElement.scrollTop;
  Object.assign(freezeStyle, { top: `-${lastScrollTop}px` });
  Object.assign(bodyEl.style, freezeStyle);
};

const unfreezeScroll = () => {
  const bodyEl = document.body;
  Object.assign(bodyEl.style, unfreezeStyle);
  document.documentElement.scrollTop = lastScrollTop;
};

export { freezeScroll, unfreezeScroll };
