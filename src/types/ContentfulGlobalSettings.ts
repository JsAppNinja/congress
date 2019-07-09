import { ContentfulPhoto } from 'types/ContentfulPhoto';
import { Section } from 'types/Section';

export type ContentfulGlobalSettings = {
  sections: Section[];
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
