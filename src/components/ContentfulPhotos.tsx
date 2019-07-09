import React from 'react';
import { Image } from 'components/base';
import { Asset } from 'contentful';

interface Props {
  photos: Asset[];
}

const ContentfulPhotos: React.FC<Props> = ({ photos }) => {
  return (
    <div className="flex flex-row col-12 flex-wrap pt1">
      {photos.map((photo: Asset) => {
        return (
          <div className="col-6" key={photo.fields.title}>
            <Image
              alt={photo.fields.title}
              className="col-12 w100"
              src={photo.fields.file.url}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ContentfulPhotos;
