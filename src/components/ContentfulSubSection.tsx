import React from 'react';
import marked from 'marked';
import { SubSection } from 'types/SubSection';
import { Block } from 'types/Block';
import ContentfulBlock from 'components/ContentfulBlock';

interface Props {
  subSection: SubSection;
}

const ContentfulSubSection: React.FC<Props> = ({ subSection }) => {
  return (
    <div className="ContentfulSubSection">
      <p className="text-lg">{subSection.title}</p>
      {subSection.blocks.map((block: Block) => (
        <ContentfulBlock block={block} />
      ))}
    </div>
  );
};

export default ContentfulSubSection;
