import { ContentfulPhoto } from 'types/ContentfulPhoto';

export type ContentfulGlobalSettings = {
  mainHeader: string;
  mainSubheader: string;
  mainParagraph: string;
  mainPhoto: ContentfulPhoto | null;
  mainSlogan: string[] | null;
  donateUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  twitterUrl: string;
};
