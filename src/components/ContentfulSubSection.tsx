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
      <p className="drunkcond-super text-h1 uppercase">{subSection.title}</p>
      {subSection.blocks.map((block: Block) => {
        switch (block.type) {
          case 'blockPhotos':
            return <ContentfulPhotos key={block.id} photos={block.photos} />;
          case 'blockParagraph':
            return (
              <ContentfulRichText
                key={block.id}
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