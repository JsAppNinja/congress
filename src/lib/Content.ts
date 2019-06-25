import { ContentfulClientApi } from 'contentful';
import hashify from 'object-hash';

import { ContentfulContentType } from 'types/ContentfulContentType';

type ContentType = {
  cache: {
    getEntries: {
      [hash: string]: unknown;
    };
  };
  contentful?: ContentfulClientApi;
  setRef: (clientID: string, client: ContentfulClientApi) => void;
  getEntries: (query: Query) => Promise<unknown>;
  clients: {
    [clientID: string]: ContentfulClientApi;
  };
};

type Query = {
  content_type: ContentfulContentType;
  include: number;
};

const Content: ContentType = {
  cache: {
    getEntries: {}
  },
  clients: {},
  setRef(clientID: string, client: ContentfulClientApi) {
    this.clients[clientID] = client;
  },
  getEntries(query: Query) {
    const hashified = hashify(query);

    if (!!this.cache.getEntries[hashified]) {
      return new Promise(resolve => resolve(this.cache.getEntries[hashified]));
    }

    return this.clients.contentful.getEntries(query).then((val: unknown) => {
      this.cache.getEntries[hashified] = val;
      return val;
    });
  }
};

export default Content;