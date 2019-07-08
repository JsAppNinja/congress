import React from 'react';
import marked from 'marked';
import { Section } from 'types/Section';
import { SubSection } from 'types/SubSection';
import ContentfulSubSection from 'components/ContentfulSubSection';
import slugify from 'utils/slugify';
interface Props {
  section: Section;
}

const ContentfulSection: React.FC<Props> = ({ section }) => {
  return (
    <div className="ContentfulSection col-6">
      <p className="text-xl">{section.title}</p>
      {section.subSections.map((subSection: SubSection) => {
        return <ContentfulSubSection subSection={subSection} />;
      })}
    </div>
  );
};

export default ContentfulSection;
