import Content from 'lib/Content';

export const fetchMainContent = () => ({
  type: 'FETCH_MAIN_CONTENT',
  payload: Content.getEntries({
    include: 4,
    content_type: 'section'
  })
});
