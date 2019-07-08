import React from 'react';
import marked from 'marked';
import { Block } from 'types/Block';
import get from 'utils/get';

interface Props {
  block: Block;
}

const ContentfulBlock: React.FC<Props> = ({ block }) => {
  console.log('BLOCK', block);
  const type = get(block, 'sys.contentType.sys.id');
  const description = get(block, 'fields.description');
  console.log(description);
  return <div dangerouslySetInnerHTML={{ __html: marked(description) }} />;

  // switch(type) {
  //   case 'blockParagraph':
  //     return contentBlocks.map((contentBlock: any) => {
  //       return contentBlock.content.map((content: any, i: number) => {
  //         console.log('CONTENT', content);
  //         return <div key={i} dangerouslySetInnerHTML={{ __html: marked(content) }} />
  //       });
  //     });
  //     break;
  //   default:
  //     return null;
  // }
};

export default ContentfulBlock;
