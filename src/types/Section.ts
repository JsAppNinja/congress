import { EntryFields } from 'contentful';

import { SubSection } from 'types/SubSection';

export type Section = {
  title: string;
  subSections: SubSection[];
  description: EntryFields.RichText;
};
