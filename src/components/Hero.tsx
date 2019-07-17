import React from 'react';
import { ContentfulPhoto } from 'types/ContentfulPhoto';
import { Image } from 'components/base';

interface Props {
  header: string;
  subHeader: string;
  body: string;
  photo: ContentfulPhoto | null;
  slogan: string[] | null;
}

const Hero: React.FC<Props> = ({ header, subHeader, body, photo, slogan }) => (
  <div
    className="Hero franklin-gothic flex p1 pt2 bg-color-transparent transition-slide-up-in"
    role="region"
  >
    <div className="col-12">
      <p className="text-xxxl bold">{header}</p>
      <p className="text-xxxl bold">{subHeader}</p>
      <p className="col-9 text-sm mt3 mb3 ml1">{body}</p>
      {slogan &&
        slogan.map(slogan => (
          <p key={slogan} className="text-xxxl bold">
            {slogan}
          </p>
        ))}
    </div>
    {photo && (
      <div className="col-8 none md:block">
        <Image alt={photo.description} src={photo.file.url} />
      </div>
    )}
  </div>
);

export default Hero;
