import React from 'react';
import { Asset } from 'contentful';

import { Image } from 'components/base';

interface Props {
  photos: Asset[];
}

const ContentfulPhotos: React.FC<Props> = ({ photos }) => {
  return (
    <div className="ContentfulPhotos flex flex-row col-12 pt1 overflow-x-scroll">
      {photos.map((photo: Asset, i: number) => {
        return (
          <div className="pl1 pr0 md:pl0 md:pr1" key={photo.fields.file.url}>
            <Image
              alt={photo.fields.title}
              className="ContentfulPhotos__photo pb_5"
              src={photo.fields.file.url}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ContentfulPhotos;
