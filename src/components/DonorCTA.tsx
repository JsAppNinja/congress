import React from 'react';
import arrow from 'assets/arrow.svg';
import { Image } from 'components/base';

interface Props {
  url: string;
  donorCTA: string;
}

const DonorCTA: React.FC<Props> = ({ url, donorCTA }) => {
  return (
    <div className="DonorCTA bg-color-yellow flex w100 p1">
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
