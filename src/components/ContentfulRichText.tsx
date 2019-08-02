import React from 'react';
import { BLOCKS, MARKS, INLINES, NodeData } from '@contentful/rich-text-types';
import {
  documentToHtmlString,
  Next
} from '@contentful/rich-text-html-renderer';

interface Props {
  description: any;
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => {
      return `<span class="itc-franklin-gothic-demi-compressed text-sm md:text-md">${text}</span>`;
    }
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node: NodeData, next: Next) => {
      return `<a target="_blank" rel="noopener noreferrer" href=${
        node.data.uri
      }>${next(node.content)}</a>`;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: NodeData) => {
      return `<Image class="pt1 w100" alt="${node.data.target.fields.title}" src=${node.data.target.fields.file.url} />`;
    },
    [BLOCKS.HEADING_1]: (node: NodeData, next: Next) => {
      return `<h3 class="franklin-gothic text-xxl bold pt1 md:mr3 md:pr3">${next(
        node.content
      )}</h3>`;
    },
    [BLOCKS.PARAGRAPH]: (node: NodeData, next: Next) => {
      return `<p class="franklin-gothic text-sm md:text-md pt1 md:mr3 md:pr3">${next(
        node.content
      )}</p>`;
    },
    [BLOCKS.UL_LIST]: (node: NodeData, next: Next) => {
      return `<ul class="franklin-gothic text-sm md:text-md pt1 pl2">${next(
        node.content
      )}</ul>`;
    },
    [BLOCKS.LIST_ITEM]: (node: NodeData, next: Next) => {
      return `<li class="franklin-gothic text-sm md:text-md pl1">${next(
        node.content
      )}</li>`;
    }
  }
};

const ContentfulRichText: React.FC<Props> = ({ description }) => {
  return (
    <div
      className="ContentfulRichText pr1 pl1 md:pl0"
      dangerouslySetInnerHTML={{
        __html: documentToHtmlString(description, options)
      }}
    />
  );
};

export default ContentfulRichText;
