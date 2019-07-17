import React from 'react';
import { getLocale, Polyglot } from 'constants/Locales';

interface Props {}

const SiteTitle: React.FC<Props> = () => {
  const Language = getLocale() as Polyglot;

  return (
    <p className="drunkcond-super text-h1 uppercase bg-color-transparent flex w100 p1">
      {Language.t('global.AdemForCongress')}
    </p>
  );
};

export default SiteTitle;
