import React from 'react';

import { getLocale, Polyglot } from 'constants/Locales';
import slugify from 'utils/slugify';
import get from 'utils/get';
import { Section } from 'types/Section';
import { Address } from 'types/Address';
import ademForCongress from 'assets/adem-bunkeddeko-for-congress-white.svg';
import { Image } from 'components/base';

interface Props {
  sections: Section[] | null;
  aboutTheSite: string;
  address: Address | null;
  contactEmailAddress: string;
  pressEmailAddress: string;
  designKitURL: string;
  donateUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  mediumUrl: string;
  radioUrl: string;
  shopUrl: string;
}

const Footer: React.FC<Props> = ({
  sections,
  aboutTheSite,
  address,
  contactEmailAddress,
  pressEmailAddress,
  designKitURL,
  donateUrl,
  facebookUrl,
  twitterUrl,
  instagramUrl,
  mediumUrl,
  radioUrl,
  shopUrl
}) => {
  const Language = getLocale() as Polyglot;

  return (
    <div className="Footer relative bg-color-black pt3">
      <div className="Footer__background-text absolute col-12 b0 l0 p1 mb3">
        <Image
          className="w100 h100"
          alt={Language.t('footer.ademForCongress')}
          src={ademForCongress}
        />
      </div>

      <div className="FooterContent pt1 pb1 pl_5 pr_5 md:p1">
        <div className="flex flex-col pt1 pb1 pl_5 pr_5 md:p1">
          <div className="flex flex-col">
            <p className="w100 franklin-gothic color-white text-xsm md:text-sm uppercase">
              {Language.t('footer.joinOurFight')}
            </p>
            <a
              className="franklin-gothic color-white text-xsm md:text-sm uppercase mt_5"
              target="_blank"
              rel="noopener noreferrer"
              href={donateUrl}
            >
              {Language.t('footer.donate')}
            </a>
          </div>

          <div className="flex flex-col mt2">
            {sections &&
              sections.map((section: Section) => {
                return (
                  <a
                    key={section.title}
                    className="franklin-gothic color-white text-xsm md:text-sm uppercase mt_5"
                    href={`#${slugify(section.title)}`}
                  >
                    {section.title}
                  </a>
                );
              })}
            <a
              className="franklin-gothic color-white text-xsm md:text-sm uppercase mt_5"
              href={shopUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Language.t('subNav.shop')}
            </a>
            <a
              className="franklin-gothic color-white text-xsm md:text-sm uppercase mt_5"
              href={radioUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Language.t('subNav.radio')}
            </a>
          </div>
        </div>

        <div className="FooterContent__section-contact-and-media pt1 pb1 pl_5 pr_5 md:p1">
          <div>
            <p className="franklin-gothic color-white text-sm md:text-md uppercase bold mb1">
              {Language.t('footer.contact')}
            </p>
            <a
              className="franklin-gothic color-white text-sm md:text-md"
              href={`mailto:${contactEmailAddress}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactEmailAddress}
            </a>
            <p className="franklin-gothic color-white text-sm md:text-md mt_5">
              {get(address, 'street')},
            </p>
            <p className="franklin-gothic color-white text-sm md:text-md mt_5">{`${get(
              address,
              'city'
            )}, ${get(address, 'state')} ${get(address, 'zipCode')}`}</p>
          </div>
          <div className="mt1 mt2">
            <p className="franklin-gothic color-white text-sm md:text-md bold mb1">
              {Language.t('footer.media')}
            </p>
            <a
              className="franklin-gothic color-white text-sm md:text-md mt_5"
              href={`mailto:${pressEmailAddress}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pressEmailAddress}
            </a>
          </div>
        </div>

        <div className="FooterContent__section-design-and-social pt1 pb1 pl_5 pr_5 md:p1 md:ml3 md:pl3">
          <div className="flex flex-col">
            <p className="franklin-gothic color-white text-sm md:text-md uppercase bold">
              {Language.t('footer.designToolkit')}
            </p>
            <a
              className="franklin-gothic color-white text-xsm md:text-sm uppercase mt_5"
              href={designKitURL}
            >
              {Language.t('footer.downloadAssets')}
            </a>
          </div>

          <div className="flex flex-col mt2">
            <p className="franklin-gothic color-white text-sm md:text-md uppercase bold">
              {Language.t('footer.social')}
            </p>
            <a
              className="franklin-gothic color-white text-xsm md:text-sm uppercase mt_5"
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Language.t('footer.facebook')}
            </a>
            <a
              className="franklin-gothic color-white text-xsm md:text-sm uppercase mt_5"
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Language.t('footer.twitter')}
            </a>
            <a
              className="franklin-gothic color-white text-xsm md:text-sm uppercase mt_5"
              href={mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Language.t('footer.medium')}
            </a>
            <a
              className="franklin-gothic color-white text-xsm md:text-sm uppercase mt_5"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Language.t('footer.instagram')}
            </a>
          </div>
        </div>

        <div className="FooterContent__section-about flex flex-col col-12 pb1 pl_5 pr_5 md:p1 mt2">
          <p className="franklin-gothic color-white text-sm md:text-md uppercase bold">
            {Language.t('footer.aboutTheSite')}
          </p>
          <p className="franklin-gothic color-white text-sm md:text-md mt1">
            {aboutTheSite}
          </p>
        </div>

        <div className="FooterContent__paid-for-by flex">
          <p className="franklin-gothic color-white text-xsm md:text-sm uppercase bold pt1 pb1 pl_25 pr_25 md:p1 m_5 md:m1">
            {Language.t('footer.paidForBy')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
