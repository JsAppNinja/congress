import React from 'react';
import { SubSection } from 'types/SubSection';
import { Block } from 'types/Block';
import ContentfulRichText from 'components/ContentfulRichText';
import ContentfulPhotos from 'components/ContentfulPhotos';
import get from 'utils/get';
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
        const photos = get(block, 'fields.photos');

        if (photos) {
          return (
            <ContentfulPhotos
              key={get(block, 'fields.title')}
              photos={photos}
            />
          );
        }

        return (
          <ContentfulRichText
            key={get(block, 'fields.title')}
            description={get(block, 'fields.description')}
          />
        );
      })}
    </div>
  );
};

export default ContentfulSubSection;
