import React from 'react';
import { SubSection } from 'types/SubSection';
import { Block } from 'types/Block';
import ContentfulRichText from 'components/ContentfulRichText';
import ContentfulPhotos from 'components/ContentfulPhotos';
import slugify from 'utils/slugify';

interface Props {
  sectionTitle: string;
  subSection: SubSection;
}

const ContentfulSubSection: React.FC<Props> = ({
  sectionTitle,
  subSection
}) => {
  return (
    <div
      id={[sectionTitle, subSection.title].map(slugify).join('-')}
      className="ContentfulSubSection pt2"
    >
      <p className="text-xxxl uppercase">{subSection.title}</p>
      {subSection.blocks.map((block: Block) => {
        switch (block.type) {
          case 'blockPhotos':
            return (
              <ContentfulPhotos
                key={`${block.title.split(' ').join('-')}`}
                photos={block.photos}
              />
            );
          case 'blockParagraph':
            return (
              <ContentfulRichText
                key={`${block.title.split(' ').join('-')}`}
                description={block.description}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentfulSubSection;
