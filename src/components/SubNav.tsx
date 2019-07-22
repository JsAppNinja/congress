import React from 'react';
import { getLocale, Polyglot } from 'constants/Locales';
import { Section } from 'types/Section';
import { SubSection } from 'types/SubSection';
import cx from 'classnames';
import slugify from 'utils/slugify';

interface Props {
  sections: Section[] | null;
  fullHeaderIsShown: boolean;
  shopUrl: string;
  radioUrl: string;
  joinUsUrl: string;
  volunteerUrl: string;
  hostHousePartyUrl: string;
  hideMobileSubNav: () => void;
  mobileSubnavIsShown: boolean;
}

const SubNav: React.FC<Props> = ({
  sections,
  fullHeaderIsShown,
  shopUrl,
  radioUrl,
  joinUsUrl,
  volunteerUrl,
  hostHousePartyUrl,
  hideMobileSubNav,
  mobileSubnavIsShown
}) => {
  const Language = getLocale() as Polyglot;

  const closeMobileMenu = () => {
    if (mobileSubnavIsShown) return hideMobileSubNav();

    return null;
  };

  return (
    <ul
      className={cx('SubNav p2 pl1 inline-block franklin-gothic', {
        'SubNav__full-header-is-shown': fullHeaderIsShown
      })}
    >
      {sections &&
        sections.map((section: Section) => {
          return (
            <li
              className="flex flex-col"
              key={section.title}
              onClick={closeMobileMenu}
            >
              <a
                className="SubNav__link uppercase text-sm"
                href={`#${slugify(section.title)}`}
              >
                {section.title}
              </a>
              <ul>
                {section.subSections.map((subSection: SubSection) => {
                  return (
                    <li
                      className="list-style-none"
                      key={subSection.title}
                      onClick={closeMobileMenu}
                    >
                      <a
                        className="SubNav__link pl2 text-sm"
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
      <li className="flex flex-col" onClick={closeMobileMenu}>
        <a
          className="SubNav__link col-12 text-sm"
          href={shopUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Language.t('subNav.shop')}
        </a>
      </li>
      <li className="flex flex-col" onClick={closeMobileMenu}>
        <a
          className="SubNav__link col-12 text-sm"
          href={radioUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Language.t('subNav.radio')}
        </a>
      </li>
      <li className="flex flex-col" onClick={closeMobileMenu}>
        <ul className="flex flex-col">
          <li className="list-style-none" onClick={closeMobileMenu}>
            <a
              className="SubNav__link col-12 text-sm"
              href={joinUsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Language.t('subNav.joinUs')}
            </a>
          </li>
          <li className="list-style-none" onClick={closeMobileMenu}>
            <a
              className="SubNav__link pl2 text-sm"
              href={volunteerUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Language.t('subNav.volunteer')}
            </a>
          </li>
          <li className="list-style-none" onClick={closeMobileMenu}>
            <a
              className="SubNav__link pl2 text-sm"
              href={hostHousePartyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Language.t('subNav.houseParty')}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default SubNav;
