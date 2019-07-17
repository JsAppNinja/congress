import React from 'react';
import { BLOCKS, NodeData } from '@contentful/rich-text-types';
import {
  documentToHtmlString,
  Next
} from '@contentful/rich-text-html-renderer';

interface Props {
  description: any;
}

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: NodeData) => {
      return `<Image class="ContentfulRichText pt1 w100" alt="${node.data.target.fields.title}" src=${node.data.target.fields.file.url} />`;
    },
    [BLOCKS.HEADING_1]: (node: NodeData, next: Next) => {
      return `<p class="ContentfulRichText franklin-gothic text-xxl bold pt1 md:mr3 md:pr3">${next(
        node.content
      )}</p>`;
    },
    [BLOCKS.PARAGRAPH]: (node: NodeData, next: Next) => {
      return `<p class="ContentfulRichText franklin-gothic text-md pt1 md:mr3 md:pr3">${next(
        node.content
      )}</p>`;
    },
    [BLOCKS.UL_LIST]: (node: NodeData, next: Next) => {
      return `<ul class="ContentfulRichText franklin-gothic text-md pt1 pl1">${next(
        node.content
      )}</ul>`;
    },
    [BLOCKS.LIST_ITEM]: (node: NodeData, next: Next) => {
      return `<li class="ContentfulRichText franklin-gothic text-md pl1">${next(
        node.content
      )}</li>`;
    }
  }
};

const ContentfulRichText: React.FC<Props> = ({ description }) => {
  return (
    <div
      className="pr1"
      dangerouslySetInnerHTML={{
        __html: documentToHtmlString(description, options)
      }}
    />
  );
};

export default ContentfulRichText;
