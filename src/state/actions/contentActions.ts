import Content from 'lib/Content';
import get from 'utils/get';
import { getLocale, Polyglot } from 'constants/Locales';

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

      const sections = get(fields, 'sections', []).map((section: any) => {
        return {
          title: section.fields.title,
          description: section.fields.description,
          subSections: section.fields.subSections.map((subSection: any) => {
            return {
              title: subSection.fields.title,
              blocks: subSection.fields.blocks
            };
          })
        };
      });

      return {
        sections,
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
