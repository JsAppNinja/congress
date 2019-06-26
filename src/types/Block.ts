import { EntryFields } from 'contentful';

export type BlockParagraph = {
  title: string;
  content: EntryFields.RichText;
};

export type Block = BlockParagraph;
