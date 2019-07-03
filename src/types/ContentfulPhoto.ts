type ContentfulPhotoFile = {
  url: string;
  contentType: string;
  fileName: string;
  details: ContentfulPhotoFileDetails;
};

type ContentfulPhotoFileDetails = {
  image: Image;
  size: number;
};

type Image = {
  height: number;
  width: number;
};

export type ContentfulPhoto = {
  description: string;
  file: ContentfulPhotoFile;
  title: string;
};
