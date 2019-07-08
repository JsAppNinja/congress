import React from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import marked from 'marked';
import { Block } from 'types/Block';
import get from 'utils/get';
import { Image } from 'components/base';

interface Props {
  block: Block;
}

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      return `<Image className="pr2" alt="${node.data.target.fields.title}" src=${node.data.target.fields.file.url} />`;
    }
  }
};

const ContentfulBlock: React.FC<Props> = ({ block }) => {
  const description = get(block, 'fields.description');

  return (
    <div
      className="ContentfulBlock text-md"
      dangerouslySetInnerHTML={{
        __html: documentToHtmlString(description, options)
      }}
    />
  );
};

export default ContentfulBlock;
