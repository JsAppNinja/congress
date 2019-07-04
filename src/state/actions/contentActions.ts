import Content from 'lib/Content';
import get from 'utils/get';
import { getLocale, Polyglot } from 'constants/Locales';

export const fetchMainContent = () => {
  const Language = getLocale() as Polyglot;
  const locale: string = Language.locale();

  return {
    type: 'FETCH_MAIN_CONTENT',
    payload: Content.getEntries({
      include: 4,
      content_type: 'section',
      locale: locale
    })
  };
};

export const fetchGlobalContent = () => {
  const Language = getLocale() as Polyglot;
  const locale: string = Language.locale();

  return {
    type: 'FETCH_GLOBAL_CONTENT',
    payload: Content.getEntries({
      include: 4,
      content_type: 'global',
      locale: locale
    }).then(response => {
      const fields = get(response, 'items[0].fields');

      return {
        mainHeader: get(fields, 'mainHeader', ''),
        mainSubheader: get(fields, 'mainSubheader', ''),
        mainParagraph: get(fields, 'mainParagraph', ''),
        mainPhoto: get(fields, 'mainPhoto.fields', null),
        mainSlogan: get(fields, 'mainSlogan', null),
        donateUrl: get(fields, 'donateUrl', ''),
        facebookUrl: get(fields, 'facebookUrl', ''),
        instagramUrl: get(fields, 'instagramUrl', ''),
        twitterUrl: get(fields, 'twitterUrl', '')
      };
    })
  };
};
