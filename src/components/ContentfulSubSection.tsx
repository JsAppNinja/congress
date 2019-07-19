import React from 'react';
import { SubSection } from 'types/SubSection';
import { Block } from 'types/Block';
import ContentfulRichText from 'components/ContentfulRichText';
import ContentfulPhotos from 'components/ContentfulPhotos';
import ContentfulButton from 'components/ContentfulButton';
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
    <div className="ContentfulSubSection pt2 pb2">
      <h3
        className="drunkcond-super text-h1 pl1 md:pl0"
        id={[sectionTitle, subSection.title].map(slugify).join('-')}
      >
        {subSection.title}
      </h3>
      {subSection.blocks.map((block: Block) => {
        switch (block.type) {
          case 'blockButton':
            return (
              <ContentfulButton
                key={block.id}
                description={block.description}
                url={block.url}
                buttonText={block.buttonText}
              />
            );
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
