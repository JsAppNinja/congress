import { ContentfulPhoto } from 'types/ContentfulPhoto';
import { Section } from 'types/Section';
import { Address } from 'types/Address';

export type ContentfulGlobalSettings = {
  sections: Section[];
  aboutTheSite: string;
  address: Address | null;
  designKitURL: string;
  contactEmailAddress: string;
  pressEmailAddress: string;
  mainHeader: string;
  mainSubheader: string;
  mainParagraph: string;
  mainPhoto: ContentfulPhoto | null;
  mainSlogan: string[] | null;
  donateUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  mediumUrl: string;
  twitterUrl: string;
  radioUrl: string;
  shopUrl: string;
};
