import React from 'react';
import arrow from 'assets/arrow.svg';
import { Image } from 'components/base';

interface Props {
  url: string;
}

const DonorCTA: React.FC<Props> = ({ url }) => (
  <div className="DonorCTA bg-color-yellow flex w100 p1">
    <a
      className="DonorCTA__copy text-md pr3 md:pr0"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      Adem refuses to accept donations from lobbyists, corporate PACs, and big
      real estate developers. Become a donor today
      <Image
        className="DonorCTA__arrow ml_5"
        alt="takes you to a website to donate to Adem's campaign"
        src={arrow}
      />
    </a>
  </div>
);

export default DonorCTA;
