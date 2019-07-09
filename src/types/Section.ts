import { SubSection } from 'types/SubSection';
import { EntryFields } from 'contentful';

export type Section = {
  title: string;
  subSections: SubSection[];
  description: EntryFields.RichText;
};
