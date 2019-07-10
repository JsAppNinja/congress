import { EntryFields } from 'contentful';
import { Entry, Asset } from 'contentful';

export type BlockParagraph = {
  type: 'blockParagraph';
  title: string;
  description: EntryFields.RichText;
};

export type BlockPhotos = {
  type: 'blockPhotos';
  title: string;
  photos: Asset[];
};

export type Block = BlockPhotos | BlockParagraph;
