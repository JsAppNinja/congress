import React from 'react';

import { Button } from 'components/base';

interface Props {
  description: any;
  buttonText: string;
  url: string;
}

const ContentfulButton: React.FC<Props> = ({
  description,
  buttonText,
  url
}) => {
  return (
    <div className="col-12 pl1 md:pl0">
      <p className="franklin-gothic text-md">{description}</p>
      <Button
        className="ContentfulButton pointer mt1 pt1 pb1 col-6 franklin-gothic text-md"
        ariaLabel={description}
        label={buttonText}
        isAnchor={true}
        openInNewTab={true}
        to={url}
      />
    </div>
  );
};

export default ContentfulButton;
