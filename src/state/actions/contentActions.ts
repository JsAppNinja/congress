import Content from 'lib/Content';
import get from 'utils/get';

export const fetchMainContent = () => ({
  type: 'FETCH_MAIN_CONTENT',
  payload: Content.getEntries({
    include: 4,
    content_type: 'section'
  })
});

export const fetchGlobalContent = () => ({
  type: 'FETCH_GLOBAL_CONTENT',
  payload: Content.getEntries({
    include: 4,
    content_type: 'global'
  }).then(response => {
    const fields = get(response, 'items[0].fields');

    return {
      mainHeader: get(fields, 'mainHeader', null),
      mainParagraph: get(fields, 'mainParagraph', null),
      mainPhoto: get(fields, 'mainPhoto.fields', null),
      mainSlogan: get(fields, 'mainSlogan', null),
      facebookUrl: get(fields, 'facebookUrl', null),
      instagramUrl: get(fields, 'instagramUrl', null),
      twitterUrl: get(fields, 'twitterUrl', null)
    };
  })
});
