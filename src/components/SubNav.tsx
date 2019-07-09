import React from 'react';
import { getLocale, Polyglot } from 'constants/Locales';
import { Section } from 'types/Section';
import { SubSection } from 'types/SubSection';
import slugify from 'utils/slugify';

interface Props {
  sections: Section[] | null;
}

const SubNav: React.FC<Props> = ({ sections }) => {
  const Language = getLocale() as Polyglot;

  return (
    <ul className="SubNav pl1 inline-block franklin-gothic">
      {sections &&
        sections.map((section: Section) => {
          return (
            <li className="flex flex-col" key={section.title}>
              <a
                className="uppercase text-sm"
                href={`#${slugify(section.title)}`}
              >
                {section.title}
              </a>
              <ul>
                {section.subSections.map((subSection: SubSection) => {
                  return (
                    <li className="list-style-none">
                      <a
                        key={subSection.title}
                        className="pl2 text-sm"
                        href={`#${[section.title, subSection.title]
                          .map(slugify)
                          .join('-')}`}
                      >
                        {subSection.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      <li className="flex flex-col">
        <a className="col-12 text-sm" href="#shop">
          {Language.t('subNav.shop')}
        </a>
      </li>
      <li className="flex flex-col">
        <a className="col-12 text-sm" href="#radio">
          {Language.t('subNav.radio')}
        </a>
      </li>
      <li className="flex flex-col">
        <ul className="flex flex-col">
          <li className="list-style-none">
            <a className="col-12 text-sm" href="#join-us">
              {Language.t('subNav.joinUs')}
            </a>
          </li>
          <li className="list-style-none">
            <a className="pl2 text-sm" href="#join-us-volunteer">
              {Language.t('subNav.volunteer')}
            </a>
          </li>
          <li className="list-style-none">
            <a className="pl2 text-sm" href="#join-us-host-house-party">
              {Language.t('subNav.houseParty')}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default SubNav;
