import { Dispatch } from 'redux';

import ContentfulClient, { PreviewClient } from 'lib/Contentful';
import Content from 'lib/Content';
import { fetchGlobalContent } from 'state/actions/contentActions';

export const initializeApplication = (isPreview: boolean) => (
  dispatch: Dispatch
) => {
  return dispatch({
    type: 'INITIALIZE_APPLICATION',
    payload: new Promise((resolve, reject) => {
      let Contentful;
      try {
        Contentful = isPreview ? PreviewClient() : ContentfulClient();
      } catch (e) {
        reject(e);
        return;
      }

      Content.setRef('contentful', Contentful);

      const initApp = Promise.all([dispatch(fetchGlobalContent())]);

      const timeout = new Promise((resolve, reject) => {
        setTimeout(() => reject('Timeout'), 10000);
      });

      const checkTimeout = Promise.race([initApp, timeout]);

      return checkTimeout.then(resolve).catch(reject);
    })
  });
};
