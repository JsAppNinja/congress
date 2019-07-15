import { EntryFields } from 'contentful';
import { Entry, Asset } from 'contentful';

export type BlockButton = {
  type: 'blockButton';
  buttonText: string;
  url: string;
  description: EntryFields.RichText;
};

export type BlockParagraph = {
  type: 'blockParagraph';
  title: string;
  id: string;
  description: EntryFields.RichText;
};

export type BlockPhotos = {
  type: 'blockPhotos';
  title: string;
  id: string;
  photos: Asset[];
};

export type Block = BlockPhotos | BlockParagraph | BlockButton;
