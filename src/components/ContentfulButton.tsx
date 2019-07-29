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
      <div className="col-6 mt1">
        <Button
          className="ContentfulButton pointer col-12 itc-franklin-gothic-demi-compressed text-md"
          ariaLabel={description}
          isAnchor={true}
          openInNewTab={true}
          to={url}
        >
          <span className="flex flex-col justify-center items-center h100 pt_5">
            {buttonText}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ContentfulButton;
