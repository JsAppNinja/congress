import React from 'react';
import cx from 'classnames';

import arrow from 'assets/arrow.svg';
import { Image } from 'components/base';
import isMobile from 'utils/isMobile';

interface Props {
  url: string;
  donorCTA: string;
  fullHeaderIsShown: boolean;
}

const DonorCTA: React.FC<Props> = ({ url, donorCTA, fullHeaderIsShown }) => {
  return (
    <div
      className={cx('DonorCTA flex justify-center items-center flex w100 p1', {
        'bg-color-yellow': fullHeaderIsShown,
        'bg-color-green': !fullHeaderIsShown,
        'transition-slide-up-in': !isMobile()
      })}
    >
      <a
        className="DonorCTA__copy franklin-gothic text-md pr3 md:pr0"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {donorCTA}
        <Image
          className="DonorCTA__arrow ml_5"
          alt="takes you to a website to donate to Adem's campaign"
          src={arrow}
        />
      </a>
    </div>
  );
};

export default DonorCTA;
