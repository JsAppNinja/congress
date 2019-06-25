import { ContentfulClientApi, createClient } from 'contentful';

export const PreviewClient = (): ContentfulClientApi => {
  if (!process.env.REACT_APP_CONTENTFUL_SPACE_ID) {
    throw new Error('Missing contentful space ID');
  }

  if (!process.env.REACT_APP_CONTENTFUL_PREVIEW_TOKEN) {
    throw new Error('Missing contentful preview token');
  }

  return createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_PREVIEW_TOKEN,
    host: 'preview.contentful.com'
  });
};

export default (): ContentfulClientApi => {
  if (!process.env.REACT_APP_CONTENTFUL_SPACE_ID) {
    throw new Error('Missing contentful space ID');
  }

  if (!process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN) {
    throw new Error('Missing contentful access token');
  }

  return createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
  });
};