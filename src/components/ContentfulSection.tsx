import React from 'react';
import { Section } from 'types/Section';
import { SubSection } from 'types/SubSection';
import ContentfulSubSection from 'components/ContentfulSubSection';
import ContentfulRichText from 'components/ContentfulRichText';
import get from 'utils/get';
import slugify from 'utils/slugify';

interface Props {
  section: Section;
}

const ContentfulSection: React.FC<Props> = ({ section }) => {
  const title = get(section, 'title');

  return (
    <div className="ContentfulSection col-12 md:col-6 pt1 pl1 md:pl0">
      <p id={slugify(title)} className="drunkcond-super text-h1 uppercase">
        {title}
      </p>
      {section.description && (
        <ContentfulRichText description={section.description} />
      )}
      {section.subSections.map((subSection: SubSection) => {
        return (
          <ContentfulSubSection
            sectionTitle={title}
            key={subSection.title}
            subSection={subSection}
          />
        );
      })}
    </div>
  );
};

export default ContentfulSection;
