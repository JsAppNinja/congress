import React from 'react';
import cx from 'classnames';
import { Asset } from 'contentful';

import { Image } from 'components/base';

interface Props {
  photos: Asset[];
}

const ContentfulPhotos: React.FC<Props> = ({ photos }) => {
  return (
    <div className="flex flex-row col-12 flex-wrap pt1">
      {photos.map((photo: Asset, i: number) => {
        return (
          <div className={cx('col-6', { pr1: i % 2 })} key={photo.fields.title}>
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
